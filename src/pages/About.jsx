import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate("/about")
  return (
    <div className="home">
      <section className="hero">
        
        <h2>Welcome to <span className="highlight">TrackMyReps</span></h2>
        <p>
          <h1>Are you ready to transform your fitness journey?</h1>
        </p>
        <button onClick={() => navigate("/signin")}>I am ready!</button>

      </section>

    </div>

  )}