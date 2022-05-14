import { observer } from "mobx-react-lite";
import React from "react";
import store from "../../../../store/store";
import styles from "./Category.module.css";

type CategoryProps = {
  title: string;
};

const Category = observer((props: CategoryProps) => {
  const buttonStyles = [
    styles.button,
    store.chosenCategory === props.title
      ? styles.activeButton
      : styles.passiveButton,
  ].join(" ");

  return (
    <div className={styles.root}>
      <button
        onClick={() => store.chooseCategory(props.title)}
        className={buttonStyles}
      >
        {props.title}
      </button>
    </div>
  );
});

export default Category;
