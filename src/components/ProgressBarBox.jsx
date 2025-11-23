import React, { useEffect, useState } from "react";

export default function ProgressBarBox({ progress = 0, setProgress }) {
  const [completed, setCompleted] = useState(false);
  const [increment, setIncrement] = useState(10); // default increment value

  // Trigger animation when progress hits 100%
  useEffect(() => {
    if (progress >= 100) {
      setCompleted(true);
      const timer = setTimeout(() => setCompleted(false), 1000); // reset after 1s
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div>
      {/* Input for dynamic increment */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          Increase per click:{" "}
          <input
            type="number"
            value={increment}
            min="1"
            max="100"
            onChange={e => setIncrement(Number(e.target.value))}
            style={{ width: "60px" }}
          />
          
        </label>
      </div>

      {/* Progress bar container */}
      <div
        style={{
          width: "100%",
          height: "20px",
          background: "#eee",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "10px",
          border: completed ? "2px solid gold" : "2px solid #eee",
          transition: "border 0.5s ease",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: completed ? "#ff0" : "#4caf50",
            borderRadius: "10px",
            transition: "width 0.5s ease, background 0.5s ease",
          }}
        />
      </div>

      {/* Buttons */}
      <button onClick={() => setProgress(Math.min(progress + increment, 100))}>
        +{increment} Reps
      </button>
      <button onClick={() => setProgress(0)} style={{ marginLeft: "5px" }}>
        Reset
      </button>
    </div>
  );
}
