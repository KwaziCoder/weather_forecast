import React from "react";
import styles from "./Overview.module.css";
import Lottie from "react-lottie";
import weatherStorm from "./../../../../lotties/weather-storm.json";

const Overview = () => {
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
      <div className={styles.wrap}>
        <div className={styles.imageWrap}>
          <Lottie options={lottieOptions} height={200} width={200} />
        </div>
        <div className={styles.textWrap}>
          <p className={styles.temperature}>{"+9 ... -1\u2103"}</p>
          <p className={styles.wind}>Ветер: 2 м/с</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
