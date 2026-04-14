import Tag from "./Tag";

import BackArrow from "../assets/icons/back-arrow.svg";

export default function GameLog({
  gameLog,
  tagIcons,
  tagColors,
  getGameSpeed,
  formatTime,
  gameState,
  setGameState,
}) {
  function handleClick() {
    setGameState((prev) => {
      return { ...prev, state: gameState.prevState };
    });
  }

  return (
    <div className="game-log">
      <div className="game-log__heading">
        <button onClick={handleClick} className="game-log__heading-arrow">
          <img src={BackArrow} alt="Back arrow" />
        </button>
        <h2>Game Log</h2>
        <div></div>
      </div>
      <div className="game-log__column-headings">
        <p>Result</p>
        <p>Score</p>
        <p>Time</p>
        <p>Speed</p>
      </div>
      <div className="game-log__list">
        {gameLog.length === 0 ? (
          <div className="game-log__list-item">
            <p className="game-log__list-item-empty">No games played</p>
          </div>
        ) : (
          gameLog.map((game) => {
            const gameSpeed = getGameSpeed(game.ratio);

            return (
              <div key={crypto.randomUUID()} className="game-log__list-item">
                <Tag
                  icon={game.win ? tagIcons.trophy : tagIcons.sadFace}
                  text={game.win ? "Win" : "DNF"}
                  bgColor={game.win ? tagColors.great : tagColors.awful}
                />
                <p>{game.score}</p>
                <p>{formatTime(game.time)}</p>
                <Tag
                  icon={gameSpeed.icon}
                  text={gameSpeed.text}
                  bgColor={gameSpeed.bgColor}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
