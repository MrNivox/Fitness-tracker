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
          <h3>Feature 2</h3>
          <p>Describe how your solution makes an impact.</p>
        </div>

        <div className="card">
          <h3>Feature 3</h3>
          <p>Include any future improvements or ideas.</p>
        </div>
      </div>
    </div>
  )
}
