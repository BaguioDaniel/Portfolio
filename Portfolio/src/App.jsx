import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ExperienceDetail from './pages/ExperienceDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
      </Routes>
    </Router>
  )
}

export default App
