import { useState } from 'react'
import '../styles/ChatWidget.css'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. Feel free to ask me anything about this portfolio! However as of now, I am still under development.",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages([...messages, userMessage])
    setInputValue('')
    setIsLoading(true)

    // TODO: Call your OpenAI backend API here
    // Example: const response = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: inputValue }) })
    
    try {
      // Placeholder for API call - replace with actual OpenAI endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue })
      })
      
      if (response.ok) {
        const data = await response.json()
        const botMessage = {
          id: messages.length + 2,
          text: data.reply,
          sender: 'bot',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I couldn't process your message. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-widget">
          {/* Header */}
          <div className="chat-header">
            <h3>AI Assistant</h3>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message message-${msg.sender}`}>
                <div className="message-content">
                  {msg.text}
                </div>
                <span className="message-time">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="message message-bot">
                <div className="message-content typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <input 
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="chat-input"
            />
            <button 
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="send-btn"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  )
}
