import { useEffect, useRef, useState } from "react";

import Game from "./Game";
import GameLog from "./GameLog";
import MenuMain from "./MenuMain";
import MenuPlayAgain from "./MenuPlayAgain";
import Navbar from "./Navbar";
import Scoreboard from "./Scoreboard";

import Car from "../assets/icons/car.png";
import Fire from "../assets/icons/fire.svg";
import Star from "../assets/icons/star.svg";
import SadFace from "../assets/icons/sad-face.svg";
import Snail from "../assets/icons/snail.png";
import ThumbsUp from "../assets/icons/thumbs-up.svg";
import Trophy from "../assets/icons/trophy.svg";
import Turtle from "../assets/icons/turtle.png";

export default function MemoryCard() {
  const [gameState, setGameState] = useState({
    state: "menu",
    win: false,
  });
  const [driverList, setDriverList] = useState([]);
  const [clickedDrivers, setClickedDrivers] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const [highScore, setHighScore] = useState({
    score: 0,
    time: 0,
    new: false,
  });
  const [gameLog, setGameLog] = useState([]);

  useEffect(() => {
    fetch("https://api.openf1.org/v1/drivers?&session_key=latest")
      .then((response) => response.json())
      .then((data) => {
        setDriverList(data);
      });
  }, []);

  function shuffleList(list) {
    for (let i = list.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  function startTimer() {
    const startTime = Date.now();
    timerRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    setElapsedTime(0);
  }

  function formatTime(ms) {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  function handleStartClick() {
    resetTimer();
    shuffleList(driverList);
    setGameState({ state: "playing", win: false });
    setCurrentScore(0);
    startTimer();
    setHighScore((prev) => {
      return { ...prev, new: false };
    });
  }

  function handleGameLogClick() {
    setGameState((prev) => {
      return { ...prev, state: "gamelog" };
    });
  }

  function getGameSpeed(ratio) {
    if (ratio <= 2000)
      return { icon: tagIcons.fire, text: "BLAZING", bgColor: tagColors.great };
    if (ratio > 2000 && ratio <= 4000)
      return { icon: tagIcons.car, text: "Fast", bgColor: tagColors.good };
    if (ratio > 4000 && ratio <= 6000)
      return {
        icon: tagIcons.thumbsUp,
        text: "Steady",
        bgColor: tagColors.average,
      };
    if (ratio > 6000 && ratio <= 8000)
      return { icon: tagIcons.turtle, text: "Slow", bgColor: tagColors.bad };
    if (ratio > 8000)
      return {
        icon: tagIcons.snail,
        text: "Sluggish",
        bgColor: tagColors.awful,
      };
  }

  const tagIcons = {
    car: Car,
    fire: Fire,
    star: Star,
    sadFace: SadFace,
    snail: Snail,
    thumbsUp: ThumbsUp,
    trophy: Trophy,
    turtle: Turtle,
  };

  const tagColors = {
    great: "#0198FF",
    good: "#5AD123",
    average: "#ECE10A",
    bad: "#FF9100",
    awful: "#FF5958",
  };

  return (
    <div className="memory-card">
      <Navbar setGameState={setGameState} />
      {gameState.state === "menu" && (
        <MenuMain
          handleStartClick={handleStartClick}
          handleGameLogClick={handleGameLogClick}
        />
      )}
      {(gameState.state === "playing" || gameState.state === "gameover") && (
        <Scoreboard
          gameState={gameState}
          setGameState={setGameState}
          currentScore={currentScore}
          elapsedTime={elapsedTime}
          setElapsedTime={setElapsedTime}
          highScore={highScore}
          formatTime={formatTime}
        />
      )}
      {gameState.state === "playing" && (
        <Game
          setGameState={setGameState}
          driverList={driverList}
          shuffleList={shuffleList}
          clickedDrivers={clickedDrivers}
          setClickedDrivers={setClickedDrivers}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          stopTimer={stopTimer}
          setHighScore={setHighScore}
          elapsedTime={elapsedTime}
          setGameLog={setGameLog}
        />
      )}
      {gameState.state === "gameover" && (
        <MenuPlayAgain
          handleStartClick={handleStartClick}
          handleGameLogClick={handleGameLogClick}
          gameState={gameState}
          currentScore={currentScore}
          elapsedTime={elapsedTime}
          formatTime={formatTime}
          highScore={highScore}
          tagIcons={tagIcons}
          tagColors={tagColors}
          getGameSpeed={getGameSpeed}
        />
      )}
      {gameState.state === "gamelog" && (
        <GameLog
          gameLog={gameLog}
          tagIcons={tagIcons}
          tagColors={tagColors}
          getGameSpeed={getGameSpeed}
          formatTime={formatTime}
        />
      )}
    </div>
  );
}
