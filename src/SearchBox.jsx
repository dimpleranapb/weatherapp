import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./SearchBox.module.css";
import { teal } from "@mui/material/colors";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "dbb072884f359be3d32d8e109dd37807";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempmax: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };

  return (
    <div className={styles.SearchBox}>
      <h3>Search for the weather</h3>
      <br></br>
      <form>
        <TextField
          onChange={handleChange}
          id="city"
          label="City Name"
          variant="outlined"
          required
        />
        <br></br>
        <br></br>
        <Button onClick={handleSubmit} variant="contained">
          Search
        </Button>
      </form>
      <br></br>
    </div>
  );
}
