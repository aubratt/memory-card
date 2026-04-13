export default function Card({
  firstName,
  lastName,
  headshotUrl,
  teamColor,
  clickedDrivers,
  setClickedDrivers,
  currentScore,
  setCurrentScore,
  stopTimer,
  driverList,
  shuffleList,
  setGameState,
  setHighScore,
  elapsedTime,
  setGameLog,
}) {
  function endGame(win) {
    stopTimer();
    setGameState({ state: "gameover", win: win });
    setHighScore((prev) => {
      const score = win ? currentScore + 1 : currentScore;
      if (score >= prev.score && (elapsedTime < prev.time || prev.time === 0)) {
        return { score: score, time: elapsedTime, new: true };
      } else if (score > prev.score) {
        return { score: score, time: elapsedTime, new: true };
      } else return prev;
    });
    setClickedDrivers(() => {
      return [];
    });
    setGameLog((prev) => {
      return [
        {
          win: win,
          score: win ? currentScore + 1 : currentScore,
          time: elapsedTime,
          ratio: elapsedTime / currentScore,
        },
        ...prev,
      ];
    });
  }

  function handleClick() {
    const validClick = !clickedDrivers.includes(firstName);

    if (validClick) {
      setCurrentScore((prev) => {
        return prev + 1;
      });
      if (currentScore === 21) endGame(true);
      else {
        shuffleList(driverList);
        setClickedDrivers((prev) => {
          return [...prev, firstName];
        });
      }
    } else {
      endGame(false);
    }
  }

  return (
    <button onClick={handleClick} className="memory-card__card">
      <img
        src={headshotUrl}
        alt={`${firstName} ${lastName}`}
        className="memory-card__card-img"
        style={{ backgroundColor: `#${teamColor}` }}
      />
      <p className="memory-card__card-name">{firstName}</p>
    </button>
  );
}
