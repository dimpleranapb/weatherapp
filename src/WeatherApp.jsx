import React from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
import styles from "./WeatherApp.module.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    feelsLike: 38.05,
    humidity: 84,
    temp: 31.05,
    tempMin: 31.05,
    tempMax: 31.05,
    weather: "Search Your City",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div className={styles.weatherApp}>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
