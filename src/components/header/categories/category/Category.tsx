import React from 'react';
import styles from "./Category.module.css";

type CategoryProps = {
  title: string
}

const Category = (props: CategoryProps) => {
  return (
    <div className={styles.root}>
      <button className={styles.button}>
        {props.title}
      </button>
    </div>
  )
}


export default Category;