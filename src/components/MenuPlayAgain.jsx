import Tag from "./Tag";

import Car from "../assets/icons/car.png";
import Fire from "../assets/icons/fire.svg";
import Star from "../assets/icons/star.svg";
import SadFace from "../assets/icons/sad-face.svg";
import Snail from "../assets/icons/snail.png";
import ThumbsUp from "../assets/icons/thumbs-up.svg";
import Trophy from "../assets/icons/trophy.svg";
import Turtle from "../assets/icons/turtle.png";

export default function MenuPlayAgain({
  handleStartClick,
  handleGameLogClick,
  gameState,
  currentScore,
  elapsedTime,
  formatTime,
  highScore,
}) {
  const tags = {
    win: {
      class: "win",
      tag: "Win",
      icon: "trophy",
    },
    dnf: {
      class: "dnf",
      tag: "DNF",
      icon: "slash circle (unless i find a better one)",
    },
    highScore: {
      class: "high-score",
      tag: "High Score",
      icon: "star",
    },
    blazing: {
      class: "blazing",
      tag: "BLAZING",
      icon: "fire",
    },
    fast: {
      class: "fast",
      tag: "Fast",
      icon: "car (maybe put smoke behind car)",
    },
    steady: {
      class: "steady",
      tag: "Steady",
      icon: "checkmark/thumbs up",
    },
    slow: {
      class: "slow",
      tag: "Slow",
      icon: "turtle",
    },
    sluggish: {
      class: "sluggish",
      tag: "Sluggish",
      icon: "slug/snail",
    },
  };

  const great = "#0198FF";
  const good = "#5AD123";
  const average = "#ECE10A";
  const bad = "#FF9100";
  const awful = "#FF5958";

  const ratio = elapsedTime / currentScore;

  return (
    <div className="menu">
      <div className="menu__result">
        <p>{gameState.win ? "Nice!" : "Game Over"}</p>
        <div className="menu__recap">
          <div className="menu__recap-stats">
            <div className="menu__recap-score">
              <p className="menu__recap-score-heading">Score</p>
              <p className="menu__recap-score-value">{currentScore}</p>
            </div>
            <div className="menu__recap-time">
              <p className="menu__recap-time-heading">Time</p>
              <p className="menu__recap-time-value">
                {formatTime(elapsedTime)}
              </p>
            </div>
          </div>
          <div className="menu__recap-tags">
            {gameState.win ? (
              <Tag icon={Trophy} text="Win" bgColor={great} />
            ) : (
              <Tag icon={SadFace} text="DNF" bgColor={awful} />
            )}
            {ratio <= 2000 && (
              <Tag icon={Fire} text="BLAZING" bgColor={great} />
            )}
            {ratio > 2000 && ratio <= 4000 && (
              <Tag icon={Car} text="Fast" bgColor={good} />
            )}
            {ratio > 4000 && ratio <= 6000 && (
              <Tag icon={ThumbsUp} text="Steady" bgColor={average} />
            )}
            {ratio > 6000 && ratio <= 8000 && (
              <Tag icon={Turtle} text="Slow" bgColor={bad} />
            )}
            {ratio > 8000 && (
              <Tag icon={Snail} text="Sluggish" bgColor={awful} />
            )}
            {highScore.new && (
              <Tag icon={Star} text="High Score" bgColor={great} />
            )}
          </div>
        </div>
      </div>
      <div className="menu__button-list">
        <button
          onClick={handleStartClick}
          className="menu__button menu__start-button">
          Play Again
        </button>
        <button onClick={handleGameLogClick} className="menu__button">Game Log</button>
        <button className="menu__button">Settings</button>
      </div>
    </div>
  );
}
