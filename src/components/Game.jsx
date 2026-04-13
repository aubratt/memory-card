import Card from "./Card";

export default function Game({
  setGameState,
  driverList,
  shuffleList,
  clickedDrivers,
  setClickedDrivers,
  currentScore,
  setCurrentScore,
  stopTimer,
  setHighScore,
  elapsedTime,
  setGameLog,
}) {
  return (
    <div className="memory-card__game">
      {driverList.map((driver) => {
        return (
          <Card
            key={driver.driver_number}
            firstName={driver.first_name}
            lastName={driver.last_name}
            headshotUrl={driver.headshot_url}
            teamColor={driver.team_colour}
            clickedDrivers={clickedDrivers}
            setClickedDrivers={setClickedDrivers}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            stopTimer={stopTimer}
            driverList={driverList}
            shuffleList={shuffleList}
            setGameState={setGameState}
            setHighScore={setHighScore}
            elapsedTime={elapsedTime}
            setGameLog={setGameLog}
          />
        );
      })}
    </div>
  );
}
