import ProgressBarBox from "../components/ProgressBarBox.jsx";
export default function About() {
  return (
    <div className="about">
      <h2>Workout</h2>
      <p>
        Use this page to describe your project! You can rename it,
        add sections for team members, features, or demos.
      </p>
      <div className="card-grid">

        <div className="card">
          <ProgressBarBox>  </ProgressBarBox>
        </div>

        <div className="card">
          
          <input type="text" placeholder="insert Name"></input>
          <p><ProgressBarBox>  </ProgressBarBox></p>
        </div>

        <div className="card">
          <ProgressBarBox>  </ProgressBarBox>
        </div>
      </div>
    </div>
  )
}
