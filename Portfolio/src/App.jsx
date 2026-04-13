import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ExperienceDetail from './pages/ExperienceDetail'
import ChatWidget from './components/ChatWidget'
import Timeline from './components/Timeline'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      <ChatWidget />
    </Router>
  )
}

export default App
