import { useState, useEffect } from "react";
import DriverCard from "./DriverCard";

export default function DriverCards({
  clickedDrivers,
  setClickedDrivers,
  currentScore,
  setCurrentScore,
  highScore,
  setHighScore,
}) {
  const [driverList, setDriverList] = useState([]);
  const [listLoaded, setListLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.openf1.org/v1/drivers?&session_key=latest")
      .then((response) => response.json())
      .then((data) => {
        setDriverList(data);
        setListLoaded(true);
      });
  }, []);

  function shuffleList(list) {
    for (let i = list.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  shuffleList(driverList);

  // console.log(driverList);

  return (
    <div className="driver-cards">
      {driverList.map((driver) => {
        return (
          <DriverCard
            key={driver.driver_number}
            firstName={driver.first_name}
            lastName={driver.last_name}
            headshotUrl={driver.headshot_url}
            teamColor={driver.team_colour}
            clickedDrivers={clickedDrivers}
            setClickedDrivers={setClickedDrivers}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            highScore={highScore}
            setHighScore={setHighScore}
          />
        );
      })}
    </div>
  );
}
