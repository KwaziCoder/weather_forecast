import React from 'react';
import Card from './card/Card';
import styles from "./Details.module.css";

const Details = () => {
  const forecastData = {
    weather: "storm",
    temperature: "+9",
    wind: "2",
    humidity: "55"
  }
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.cards}>
          <Card weather={forecastData.weather} wind={forecastData.wind} temperature={forecastData.temperature} humidity={forecastData.humidity}/>
        </div>
      </div>
    </div>
  )
}

export default Details;