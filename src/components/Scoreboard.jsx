export default function Scoreboard({ currentScore, highScore }) {
  function getScoreRatio(score) {
    return (score / 22).toFixed(2);
  }

  const currentScoreRatio = getScoreRatio(currentScore);
  const highScoreRatio = getScoreRatio(highScore);

  return (
    <div className="scoreboard">
      <div className="scoreboard__current-score">
        <p>Current Score: </p>
        <p>
          {currentScore} ({currentScoreRatio})
        </p>
      </div>
      <div className="scoreboard__high-score">
        <p>High Score: </p>
        <p>
          {highScore} ({highScoreRatio})
        </p>
      </div>
    </div>
  );
}
