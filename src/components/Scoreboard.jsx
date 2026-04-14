import ScoreboardSection from "./ScoreboardSection";

export default function Scoreboard({
  currentScore,
  elapsedTime,
  highScore,
  formatTime,
}) {
  return (
    <div className="scoreboard">
      <ScoreboardSection title="Current Score" value={currentScore} />
      <ScoreboardSection title="Time Elapsed" value={formatTime(elapsedTime)} />
      <ScoreboardSection
        title="High Score"
        value={`${highScore.score} (${formatTime(highScore.time)})`}
      />
    </div>
  );
}
