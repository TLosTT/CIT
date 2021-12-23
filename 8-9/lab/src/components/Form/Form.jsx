import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registrateUser } from "../../store/reducers/authReducer";
import styles from "./Form.module.css";

const Form = () => {
  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const dispatch = useDispatch();

  const sendData = (event) => {
    event.preventDefault();
    dispatch(
      registrateUser({ loginData: data.login, passwordData: data.password })
    );
    setData({ login: "", password: "" });
  };

  return (
    <form onSubmit={sendData} className={styles.form}>
      <div className={styles.formItem}>
        <span>Логин</span>
        <input
          type="text"
          required
          value={data.login}
          onChange={(event) => setData({ ...data, login: event.target.value })}
        />
      </div>
      <div className={styles.formItem}>
        <span>Пароль</span>
        <input
          type="password"
          required
          value={data.password}
          onChange={(event) =>
            setData({ ...data, password: event.target.value })
          }
        />
      </div>
      <div>
        <button type="submit" className={styles.btn}>
          Окей
        </button>
      </div>
    </form>
  );
};

export default Form;
