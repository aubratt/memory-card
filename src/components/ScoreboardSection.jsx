export default function ScoreboardSection({ title, value }) {
  return (
    <div className="scoreboard__section">
      <p className="scoreboard__section-title">{title}</p>
      <p className="scoreboard__section-value">{value}</p>
    </div>
  );
}
