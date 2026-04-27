# OpenAI Chat Integration Setup Guide

This guide will help you set up the OpenAI integration for your portfolio chat widget.

## Overview

The chat system consists of:
- **Frontend**: React Chat Widget (`src/components/ChatWidget.jsx`)
- **Backend**: Express.js API Server (`server.js`)
- **Services**: OpenAI integration (`src/services/OpenAIService.js`)

## Setup Steps

### 1. Get Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign in or create an account
3. Navigate to **API keys** section
4. Click **Create new secret key**
5. Copy the key (you'll only see it once!)

### 2. Install Backend Dependencies

In your terminal, run:

```bash
npm install express cors dotenv openai
npm install --save-dev nodemon
```

### 3. Configure Environment Variables

**Frontend (.env.local):**
```
VITE_API_URL=http://localhost:5000/api
```

**Backend (.env):**
```
PORT=5000
NODE_ENV=development
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_MAX_TOKENS=2000
OPENAI_TEMPERATURE=0.7
```

### 4. Start the Backend Server

Open a terminal in your project directory:

```bash
node server.js
```

You should see:
```
Chat API server running on http://localhost:5000
API endpoint: http://localhost:5000/api/chat
```

### 5. Start the Frontend Development Server

In another terminal:

```bash
npm run dev
```

## File Structure

```
Portfolio/
├── .env.local              # Frontend environment variables (do not commit)
├── .env.example            # Template for environment variables
├── server.js               # Backend Express server
├── backend-package.json    # Backend dependencies reference
├── package.json            # Frontend dependencies
│
├── src/
│   ├── components/
│   │   └── ChatWidget.jsx  # Chat UI component
│   │
│   ├── services/
│   │   └── OpenAIService.js # OpenAI API client
│   │
│   └── controllers/
│       └── ChatController.js # Chat business logic
```

## How It Works

1. **User sends a message** in the chat widget
2. **ChatWidget calls ChatController** with the message
3. **ChatController calls OpenAIService** to send HTTP request to backend
4. **Backend server receives request** and calls OpenAI API
5. **OpenAI returns response** to backend server
6. **Backend returns response** to frontend
7. **Response displays** in chat widget

## Environment Variables Explained

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_API_URL` | Frontend API endpoint (frontend only) | `http://localhost:5000/api` |
| `PORT` | Backend server port | `5000` |
| `OPENAI_API_KEY` | Your OpenAI secret key | `sk-...` |
| `OPENAI_MODEL` | Which GPT model to use | `gpt-3.5-turbo` |
| `OPENAI_MAX_TOKENS` | Max response length | `2000` |
| `OPENAI_TEMPERATURE` | Response creativity (0-1) | `0.7` |

## Troubleshooting

### "Cannot GET /api/chat"
- ✓ Is the backend server running on port 5000?
- ✓ Run: `node server.js`

### "Invalid API key"
- ✓ Check your `OPENAI_API_KEY` in `.env`
- ✓ Make sure you copied the entire key correctly
- ✓ Verify the key is active in OpenAI dashboard

### "CORS error"
- ✓ Backend CORS is configured to allow `localhost:5173` (Vite default)
- ✓ If using different port, update accordingly

### Chat not responding
- ✓ Check browser console (F12) for errors
- ✓ Check backend terminal for error messages
- ✓ Verify `.env` file exists with correct API key

## API Endpoints

### Health Check
```
GET /api/health
Response: { "status": "ok" }
```

### Chat Message
```
POST /api/chat
Body: {
  "message": "What's your experience?",
  "conversationHistory": []
}
Response: {
  "reply": "I have...",
  "conversationHistory": [...]
}
```

## Production Notes

### Security Best Practices:
1. **Never expose API keys** in frontend code
2. **Always use backend** to handle OpenAI API calls
3. **Use environment variables** for sensitive data
4. **Add authentication** to your API endpoints
5. **Implement rate limiting** to prevent abuse
6. **Add input validation** for all requests

### Cost Management:
1. Set `OPENAI_MAX_TOKENS` appropriately
2. Monitor API usage in OpenAI dashboard
3. Consider implementing message length limits
4. Cache common responses if possible

## Next Steps

1. ✓ Add input validation in backend
2. ✓ Implement conversation persistence (database)
3. ✓ Add user authentication
4. ✓ Deploy backend to production server
5. ✓ Add error logging and monitoring

## Support

For issues with:
- **OpenAI API**: Check [OpenAI Documentation](https://platform.openai.com/docs)
- **Express Server**: Check [Express Documentation](https://expressjs.com/)
- **React Chat**: Check [React Documentation](https://react.dev/)
