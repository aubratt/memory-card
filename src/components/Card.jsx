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
      console.log(elapsedTime);
      const score = win ? currentScore + 1 : currentScore;
      if (score >= prev.score && (elapsedTime < prev.time || prev.time === 0)) {
        return { score: score, time: elapsedTime, new: true };
      } else if (score > prev.score) {
        return { score: score, time: elapsedTime, new: true };
      } else return prev;
    });
    setClickedDrivers([]);
    setGameLog((prev) => {
      return [
        ...prev,
        {
          win: win,
          score: currentScore,
          time: elapsedTime,
          ratio: elapsedTime / currentScore,
        },
      ];
    });
  }

  function handleClick() {
    const validClick = !clickedDrivers.includes(firstName);

    if (validClick) {
      setClickedDrivers((prev) => {
        if (prev.length === 21) endGame(true);
        return [...prev, firstName];
      });
      setCurrentScore((prev) => {
        return prev + 1;
      });
      shuffleList(driverList);
    } else endGame(false);
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
