import React, { useState } from "react";
import ProgressBarBox from "./ProgressBarBox";

function WorkoutPage() {
  const [cards, setCards] = useState([]);

  function addCard() {
    setCards(prev => [...prev, { id: Date.now() }]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workout Page</h1>

      <button 
        onClick={addCard} 
        style={{ padding: "10px 20px", marginBottom: "20px", cursor: "pointer" }}
      >
        Add Exercise
      </button>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >
        {cards.map(card => (
          <div 
            key={card.id} 
            style={{ 
              border: "1px solid #ccc", 
              padding: "20px", 
              borderRadius: "10px" 
            }}
          >
            <h3>Exercise</h3>
            <ProgressBarBox />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPage;
