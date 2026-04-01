export default function DriverCard({
  firstName,
  lastName,
  headshotUrl,
  teamColor,
  clickedDrivers,
  setClickedDrivers,
  currentScore,
  setCurrentScore,
  highScore,
  setHighScore,
}) {
  function handleClick() {
    // is firstName in clickedDrivers?
    // yes: game over...score reset to 0...check if high score was achieved
    // no: add 1 to current score...check if score is a multiple of 22

    const validClick = !clickedDrivers.includes(firstName);

    if (validClick) {
      setClickedDrivers((prev) => {
        if (prev.length === 21) return [];

        return [...prev, firstName];
      });
      setCurrentScore((prev) => {
        return prev + 1;
      });
    } else {
      setHighScore((prev) => {
        if (currentScore > prev) return currentScore;

        return prev;
      });
      setClickedDrivers([]);
      setCurrentScore(0);
    }
  }

  return (
    <button onClick={handleClick} className="driver-card">
      <img
        src={headshotUrl}
        alt={`${firstName} ${lastName}`}
        className="driver-card__img"
        style={{ backgroundColor: `#${teamColor}` }}
      />
      <p className="driver-card__name">{firstName}</p>
    </button>
  );
}
