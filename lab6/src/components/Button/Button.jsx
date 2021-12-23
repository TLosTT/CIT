import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      Получить данные о 10 пользователях
    </button>
  );
};

export default Button;