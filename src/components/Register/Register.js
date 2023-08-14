import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";
import logoPath from "../../images/logo.svg";

function Register({ handleLogin, handleUserData, handleCardsData }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    const email = formValue.email;
    const password = formValue.password;
    // auth.login(password, email)
    // .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    // .then((res)=> {
    //     handleUserData(res);
    //     handleLogin(email);
    //     handleCardsData();
    //     navigate("/")
    //   // }
    //   })
    // .catch(err=> console.log(err))
  };
  return (
    <form className="register" name="register" noValidate onSubmit={onLogin}>
      <div className="register__header">
        <Link className="register__link" to="/">
          <img className="logo" src={logoPath} alt="логотип" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <div className="register__main">
        <div className="register__inner">
          <span className="register__inner-text">Имя</span>
          <input
            className="register__input"
            type="text"
            // placeholder="Email"
            name="text"
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="register__inner">
          <span className="register__inner-text">E-mail</span>
          <input
            className="register__input"
            type="email"
            // placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="register__inner">
          <span className="register__inner-text">Пароль</span>
          <input
            className="register__input"
            type="password"
            // placeholder="Пароль"
            name="password"
            onChange={handleChange}
            required
          ></input>
        </div>
      </div>
      <div className="register__container">
        <span className="register__text-error register__text-error_active">
          Текст ошибки
        </span>
        <button className="register__submit" type="submit">
          Зарегистрироваться
        </button>
        <div className="register__wrap">
          <span className="register__wrap-text">Уже зарегистрированы?</span>
          <Link className="register__wrap-link" to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Register;
