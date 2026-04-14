import Tag from "./Tag";

export default function MenuPlayAgain({
  handleStartClick,
  handleGameLogClick,
  handleInstructionsClick,
  gameState,
  currentScore,
  elapsedTime,
  formatTime,
  highScore,
  tagIcons,
  tagColors,
  getGameSpeed,
}) {
  const ratio = elapsedTime / currentScore;
  const gameSpeed = getGameSpeed(ratio);

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
              <Tag
                icon={tagIcons.trophy}
                text="Win"
                bgColor={tagColors.great}
              />
            ) : (
              <Tag
                icon={tagIcons.sadFace}
                text="DNF"
                bgColor={tagColors.awful}
              />
            )}
            <Tag
              icon={gameSpeed.icon}
              text={gameSpeed.text}
              bgColor={gameSpeed.bgColor}
            />
            {highScore.new && (
              <Tag
                icon={tagIcons.star}
                text="High Score"
                bgColor={tagColors.great}
              />
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
        <button onClick={handleGameLogClick} className="menu__button">
          Game Log
        </button>
        <button onClick={handleInstructionsClick} className="menu__button">Instructions</button>
      </div>
    </div>
  );
}
