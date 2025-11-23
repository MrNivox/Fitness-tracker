import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import Workout from './pages/Workout'
// import testing from './pages/testing'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </div>
  )
}

export default App
