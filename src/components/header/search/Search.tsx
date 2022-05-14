import React from "react";
import styles from "./Search.module.css";
import store from "../../../store/store";
import { observer } from "mobx-react-lite";

const Search = observer (() => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <input onChange={(event) => store.setSearchValue(event.target.value)} value={store.searchValue} placeholder="Введите название города..." className={styles.input}/>
        <button onClick={() => store.searchCity()} className={styles.button}>Найти</button>
      </div>
    </div>
  );
});

export default Search;
