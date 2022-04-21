import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.buttonsView}></div>
      <div className={styles.searchView}></div>
    </div>
  )
}

export default Header;