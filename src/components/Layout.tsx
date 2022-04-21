import React from 'react';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';
import styles from "./Layout.module.css";


const Layout = () => {
  return (
    <div className={styles.root}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Layout;