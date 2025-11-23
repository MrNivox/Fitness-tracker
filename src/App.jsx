import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Workout from "./pages/Workout";
import SignIn from "./pages/SignIn";

function App() {
  const [user, setUser] = useState(() => localStorage.getItem("currentUser"));

  return (
    <div className="app">
      {user && <Navbar />}

      <Routes>
        <Route
          path="/signin"
          element={<SignIn onLogin={(username) => setUser(username)} />}
        />
        <Route path="/" element={user ? <About /> : <Navigate to="/signin" />} />
        <Route path="/workout" element={user ? <Workout /> : <Navigate to="/signin" />} />
      </Routes>
    </div>
  );
}

export default App;
