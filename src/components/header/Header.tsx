import React from 'react';
import styles from "./Header.module.css"
import Search from './search/Search';
import Categories from './categories/Categories';

const Header = () => {
  return (
    <div className={styles.root}>
      <Categories/>
      <Search/>
    </div>
  )
}

export default Header;