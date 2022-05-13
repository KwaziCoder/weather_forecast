import React from 'react';
import styles from './Categories.module.css'
import Category from './category/Category';

const categories = ["Сегодня", "Завтра", "Три дня", "Неделя"]

const Categories = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        {categories.map((category) => <Category title={category}/>)}
      </div>
    </div>
  )
}

export default Categories;