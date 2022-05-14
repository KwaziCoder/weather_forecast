import React from "react";
import styles from "./Card.module.css";
import Lottie from "react-lottie";
import weatherStorm from "./../../../../../lotties/weather-storm.json";

type CardProps = {
  weather: string,
  temperature: string,
  humidity: string,
  wind: string
};

const Card = (props: CardProps) => {
  const {weather, temperature, humidity, wind} = props;

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: weatherStorm,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={styles.temperature}>{temperature + "\u2103"}</p>
      </div>
      <div className={styles.body}>
        <p className={styles.wind}>{`Ветер: ${wind} м/с`}</p>
        <p className={styles.humidity}>{`Влажность: ${humidity}%`}</p>
        <div className={styles.image}>
          <Lottie options={lottieOptions} height={90} width={90} />
        </div>
      </div>
    </div>
  );
};

export default Card;
