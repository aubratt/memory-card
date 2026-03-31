import { useState, useEffect } from "react";
import DriverCard from "./DriverCard";

export default function App() {
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

  return (
    <div className="App">
      {driverList.map((driver) => {
        console.log(driver)
        return (
          <DriverCard
            key={driver.driver_number}
            firstName={driver.first_name}
            lastName={driver.last_name}
            headshotUrl={driver.headshot_url}
          />
        );
      })}
    </div>
  );
}
