import React from "react";
import BasketballPlayerCard from "./components/BasketballPlayerCard";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <BasketballPlayerCard
        name="LeBron James"
        image="https://example.com/lebron.jpg"
        position="Forward"
        stats={{
          pointsPerGame: 25.4,
          assistsPerGame: 7.1,
          reboundsPerGame: 10.5,
        }}
      />
    </div>
  );
};

export default App;
