import React from "react";
import styles from "./infoBox.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import weatherImage from "./assets/weather.jpg";
export default function InfoBox({ info }) {
  let COLD_URL =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let CLOUD_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className={styles.infoBox}>
      <div class="circle xxlarge shade1"></div>
      <div class="circle xlarge shade2"></div>
      <div class="circle large shade3"></div>
      <div class="circle mediun shade4"></div>
      <div class="circle small shade5"></div>

      <h2>Weather-info = {info.weather}</h2>
      <div style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}>
        <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
          <CardMedia
            component="img"
            alt="Weather"
            height="300"
            image={
              info.humidity > 80 || info.weather.toLowerCase().includes("rain")
                ? RAIN_URL
                : info.weather.toLowerCase().includes("cloud")
                ? CLOUD_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body" color="text.primary" component={"span"}>
              <p>
                <i>Temperature</i> = {info.temp}&deg;C
              </p>
              <p>
                <i>Humidity</i> = {info.humidity}
              </p>
              <p>
                <i>Min Temp</i> = {info.tempMin}
              </p>
              <p>
                <i>Max Temo</i> = {info.tempMax}
              </p>
              <p>
                <i>Feels Like</i> = {info.feelsLike}&deg;C
              </p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
