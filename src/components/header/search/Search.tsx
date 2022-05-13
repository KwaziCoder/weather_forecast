import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <input placeholder="Введите название города..." className={styles.input}/>
        <button className={styles.button}>Найти</button>
      </div>
    </div>
  );
};

export default Search;
