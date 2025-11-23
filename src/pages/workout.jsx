import React, { useState, useEffect } from "react";
import ProgressBarBox from "../components/ProgressBarBox.jsx";

function WorkoutPage() {
  // Input for new exercise name
  const [newExerciseName, setNewExerciseName] = useState("");

  // Load saved cards with their progress from localStorage
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("cards");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cards whenever they change
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  // Add a new card with name + progress
  function addCard() {
    if (!newExerciseName.trim()) return; // prevent empty names

    const newCard = {
      id: Date.now(),
      name: newExerciseName.trim(),
      progress: 0
    };

    setCards(prev => [...prev, newCard]);
    setNewExerciseName(""); // clear input
  }

  // Delete a card
  function deleteCard(id) {
    setCards(prev => prev.filter(card => card.id !== id));
  }

  // Update progress for a specific card
  function updateProgress(id, value) {
    setCards(prev =>
      prev.map(card =>
        card.id === id ? { ...card, progress: value } : card
      )
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workout Page</h1>

      {/* Exercise name input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Exercise name..."
          value={newExerciseName}
          onChange={e => setNewExerciseName(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            marginRight: "10px"
          }}
        />
        <button
          onClick={addCard}
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Add Exercise
        </button>
      </div>

      {/* Cards Grid */}
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
              borderRadius: "10px",
              position: "relative"
            }}
          >
            <h2>{card.name}</h2>

            <ProgressBarBox
              progress={card.progress}
              setProgress={value => updateProgress(card.id, value)}
            />

            <button
              onClick={() => deleteCard(card.id)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPage;
