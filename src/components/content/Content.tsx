import React from 'react';
import store from '../../store/store';
import styles from "./Content.module.css"
import Forecast from './forecast/Forecast';


const Content = () => {
  return (
    <div className={styles.root}>
      <Forecast/>
    </div>
  )
}

export default Content;