import { useState } from "react";
import DriverCards from "./DriverCards";
import Navbar from "./Navbar";
import Scoreboard from "./Scoreboard";

export default function MemoryCard() {
  // Game/Scoreboard Idea: Game continues after a player gets 22...score can be
  // recorded with the number of valid clicks and the ratio of 22...
  // ex. Score: 22 (1.00) ... Score: 36 (1.63)

  const [clickedDrivers, setClickedDrivers] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  console.log(clickedDrivers);

  return (
    <div className="memory-card">
      <Navbar />
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <DriverCards
        clickedDrivers={clickedDrivers}
        setClickedDrivers={setClickedDrivers}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}
