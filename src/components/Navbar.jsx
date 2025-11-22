import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">TrackMyReps</h1>
      <div className="nav-links">
        <Link to="/about">Home</Link>
        <Link to="/">Project Page</Link>
        <Link to="/workout">Workout</Link>
        <Link to="/testing">Testing</Link>
      </div>
    </nav>
  )
}
