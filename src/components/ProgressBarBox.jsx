// src/ProgressBarBox.jsx
import React, { useState } from "react";

export default function ProgressBarBox() {
  const [currentValue, setCurrentValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [increment, setIncrement] = useState(10);

  const fillBar = () => {
    setCurrentValue(prev => {
      const next = prev + increment;
      return next > maxValue ? maxValue : next;
    });
  };

  const resetBar = () => {
    setCurrentValue(0);
  };

  const percentage = (currentValue / maxValue) * 100;

  return (
    <div style={{
      width: "400px",
      padding: "20px",
      border: "2px solid #ccc",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2>Custom Progress Bar</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Max Value:{" "}
          <input
            type="number"
            min="1"
            value={maxValue}
            onChange={e => setMaxValue(Number(e.target.value))}
            style={{ padding: "5px", fontSize: "16px", marginRight: "10px" }}
          />
        </label>
        <label>
          Increment per click:{" "}
          <input
            type="number"
            min="1"
            value={increment}
            onChange={e => setIncrement(Number(e.target.value))}
            style={{ padding: "5px", fontSize: "16px" }}
          />
        </label>
      </div>

      <div style={{
        width: "100%",
        backgroundColor: "#eee",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "20px"
      }}>
        <div style={{
          width: `${percentage}%`,
          height: "30px",
          backgroundColor: "#4CAF50",
          textAlign: "center",
          color: "white",
          lineHeight: "30px",
          transition: "width 0.3s"
        }}>
          {Math.round(percentage)}%
        </div>
      </div>

      <button onClick={fillBar} style={{ padding: "10px 20px", fontSize: "16px", marginRight: "10px", cursor: "pointer" }}>Fill Bar</button>
      <button onClick={resetBar} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>Reset</button>
    </div>
  );
}
