import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProgressBarBox from "./ProgressBarBox";

// Example other page
function Home() {
return (
<div style={{ textAlign: "center" }}> <h1>Home Page</h1> <Link to="/workout">Go to Workout Page</Link> </div>
);
}

// Workout page with your progress bar
function WorkoutPage() {
return (
<div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}> <ProgressBarBox /> </div>
);
}

function App() {
return ( <BrowserRouter>
{/* Navigation Links */}
<nav style={{ padding: "10px", borderBottom: "1px solid #ccc", textAlign: "center" }}>
<Link to="/" style={{ marginRight: "10px" }}>Home</Link> <Link to="/workout">Workout</Link> </nav>

```
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/workout" element={<WorkoutPage />} />
  </Routes>
</BrowserRouter>


);
}

export default App;
