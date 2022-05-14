import React from 'react';
import Details from './details/Details';
import Overview from './overview/Overview';
import styles from "./Forecast.module.css";
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';



const Forecast = observer (() => {
  
 
  return (
    <div className={styles.root} >
      <Overview/>
      <Details/>
    </div>
  )
});

export default Forecast;