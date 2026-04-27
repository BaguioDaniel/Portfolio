/**
 * Chat Controller
 * Frontend controller for managing chat state and business logic
 */

import { OpenAIService } from '../services/OpenAIService'

export const ChatController = {
  /**
   * Process a user message and get an AI response
   * @param {string} userMessage - The message from the user
   * @param {Array} conversationHistory - Previous messages for context
   * @returns {Promise<Object>} - Object containing the bot's response and updated history
   */
  async processMessage(userMessage, conversationHistory = []) {
    try {
      // Add user message to history for context
      const updatedHistory = [
        ...conversationHistory,
        { role: 'user', content: userMessage },
      ]

      // Get response from OpenAI via backend
      const botResponse = await OpenAIService.sendMessage(
        userMessage,
        updatedHistory
      )

      // Add bot response to history
      updatedHistory.push({ role: 'assistant', content: botResponse })

      return {
        success: true,
        reply: botResponse,
        conversationHistory: updatedHistory,
      }
    } catch (error) {
      console.error('Chat Controller Error:', error)
      return {
        success: false,
        reply:
          "I'm having trouble connecting to the AI service. Please try again later.",
        conversationHistory,
      }
    }
  },

  /**
   * Initialize a new conversation
   * Returns system message for context
   */
  initializeConversation() {
    return [
      {
        role: 'system',
        content:
          "You are a helpful AI assistant for a software developer's portfolio website. You answer questions about the developer's experience, skills, and projects. Be friendly and professional.",
      },
    ]
  },
}
