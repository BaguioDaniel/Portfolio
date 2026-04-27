import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Store conversation history (in production, use a database)
const conversationHistories = {}

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

/**
 * Chat endpoint - receives messages and returns AI responses
 */
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body

    // Validate input
    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' })
    }

    // Build messages array for OpenAI
    const systemMessage = {
      role: 'system',
      content: `You are a helpful AI assistant for a software developer's portfolio website. 
                You answer questions about the developer's experience, skills, and projects. 
                Be friendly, professional, and concise in your responses.
                If you don't know something, admit it honestly.`,
    }

    // Combine system message with conversation history
    const messages = [
      systemMessage,
      ...conversationHistory.map(msg => ({
        role: msg.role || (msg.sender === 'user' ? 'user' : 'assistant'),
        content: msg.content || msg.text,
      })),
      {
        role: 'user',
        content: message,
      },
    ]

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS || 2000),
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE || 0.7),
    })

    const botReply = response.choices[0].message.content

    // Return response
    res.json({
      reply: botReply,
      conversationHistory: [...conversationHistory, { role: 'user', content: message }],
    })
  } catch (error) {
    console.error('OpenAI API Error:', error)

    // Handle specific OpenAI errors
    if (error.status === 401) {
      return res.status(401).json({
        error: 'Invalid API key. Please check your OPENAI_API_KEY.',
      })
    }

    if (error.status === 429) {
      return res.status(429).json({
        error: 'Rate limited. Please try again later.',
      })
    }

    res.status(500).json({
      error: 'Failed to process request. Please try again later.',
    })
  }
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Chat API server running on http://localhost:${PORT}`)
  console.log(`API endpoint: http://localhost:${PORT}/api/chat`)
})
