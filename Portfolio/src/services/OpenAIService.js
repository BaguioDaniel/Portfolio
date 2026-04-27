/**
 * OpenAI Service
 * Handles communication with the OpenAI API via a backend service
 * This keeps your API key secure on the server side
 */

const API_ENDPOINT = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const OpenAIService = {
  /**
   * Send a chat message and get a response from OpenAI
   * @param {string} message - The user's message
   * @param {Array} conversationHistory - Previous messages for context
   * @returns {Promise<string>} - The AI's response
   */
  async sendMessage(message, conversationHistory = []) {
    try {
      const response = await fetch(`${API_ENDPOINT}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversationHistory,
        }),
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.reply
    } catch (error) {
      console.error('OpenAI Service Error:', error)
      throw error
    }
  },

  /**
   * Test the connection to the backend API
   * @returns {Promise<boolean>} - true if connection is successful
   */
  async testConnection() {
    try {
      const response = await fetch(`${API_ENDPOINT}/health`)
      return response.ok
    } catch {
      return false
    }
  },
}
