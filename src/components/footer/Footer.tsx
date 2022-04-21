import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textBox}>
        <p className={styles.text}>
          Погода в (выбранном городе) на сайте размещена исключительно для
          личного некоммерческого использования.
        </p>
        <p className={styles.text}>За прогноз погоды кланяемся в ноги его величеству Яндексу.</p>
        <p className={styles.text}>© Kwazi Production</p>
      </div>
    </div>
  );
};

export default Footer;
