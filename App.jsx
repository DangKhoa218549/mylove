import React from "react";
import "./App.css";

function App() {
  return (
    <div className="heart-container">
      <div className="heart"></div>
      <div className="heart-text">I love You</div>

      {/* Particles bay từ rìa trái tim */}
      {[...Array(10)].map((_, i) => (
        <span key={i} className={`particle particle-${i + 1}`}></span>
      ))}
    </div>
  );
}

export default App;
