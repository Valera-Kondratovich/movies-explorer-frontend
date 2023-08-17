import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";
import logoPath from "../../images/logo.svg";

function Login(props) {
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
    <main className="main">
      <section
        className={`section-login ${
          props.nav && "section-login_background-activ"
        }`}
      >
        <form className="login" name="login" noValidate onSubmit={onLogin}>
          <div className="login__header">
            <Link className="login__link" to="/">
              <img className="logo" src={logoPath} alt="логотип" />
            </Link>
            <h1 className="login__title">Рады видеть!</h1>
          </div>
          <div className="login__main">
            <div className="login__inner">
              <label className="login__inner-text">E-mail</label>
              <input
                className="login__input"
                type="email"
                // placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="login__inner">
              <label className="login__inner-text">Пароль</label>
              <input
                className="login__input"
                type="password"
                // placeholder="Пароль"
                name="password"
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div className="login__container">
            <span className="login__text-error login__text-error_active">
              Текст ошибки
            </span>
            <button className="login__submit" type="submit">
              Войти
            </button>
            <div className="login__wrap">
              <span className="login__wrap-text">Еще не зарегистрированы?</span>
              <Link className="login__wrap-link" to="/signup">
                Регистрация
              </Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
