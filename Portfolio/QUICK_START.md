# 🚀 Quick Start Guide - OpenAI Chat Widget

## 1️⃣ Get OpenAI API Key (2 minutes)

1. Go to https://platform.openai.com/api/account/api-keys
2. Click "Create new secret key"
3. Copy the key (visible only once!)

## 2️⃣ Install Backend Dependencies (1 minute)

```bash
npm install express cors dotenv openai
npm install --save-dev nodemon
```

## 3️⃣ Add Your API Key (30 seconds)

Edit the `.env` file in the project root and replace:
```
OPENAI_API_KEY=your_openai_api_key_here
```

with your actual API key:
```
OPENAI_API_KEY=sk-proj-1234567890abcdefghijklmnop...
```

## 4️⃣ Start Backend Server (Terminal 1)

```bash
node server.js
```

You should see:
```
Chat API server running on http://localhost:5000
```

## 5️⃣ Start Frontend (Terminal 2)

```bash
npm run dev
```

You should see:
```
VITE v... ready in ... ms

➜  Local:   http://localhost:5173/
```

## 6️⃣ Test the Chat

1. Open http://localhost:5173 in your browser
2. Click the chat bubble (💬) in the bottom right
3. Type a message and send it
4. You should get a response from the AI!

---

## ⚠️ Common Issues

| Problem | Solution |
|---------|----------|
| "Cannot GET /api/chat" | Is backend running? Run `node server.js` |
| "Invalid API key" | Copy full key from OpenAI, update `.env` |
| Chat not responding | Check both servers running + browser console |
| CORS error | Both frontend & backend must be running |

## 📖 Full Documentation

See `OPENAI_SETUP.md` for detailed setup and troubleshooting guide.

## 🎯 What's Included

✅ Frontend chat widget (bottom right)
✅ Express backend server
✅ OpenAI API integration  
✅ Conversation history tracking
✅ Error handling
✅ Environment configuration

---

**Ready to chat? Start with Step 1! 🎉**
