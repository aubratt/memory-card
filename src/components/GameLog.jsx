import Tag from "./Tag";

export default function GameLog({
  gameLog,
  tagIcons,
  tagColors,
  getGameSpeed,
  formatTime,
}) {
  console.log(gameLog);

  return (
    <div className="game-log">
      <h2>Game Log</h2>
      <div className="game-log__header">
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
