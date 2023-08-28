import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";
import logoPath from "../../images/logo.svg";
import Header from "../Header/Header";

function Profile(props) {
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
    <>
      <Header
        login={props.login}
        burgerNav={props.burgerNav}
        burgerNavInactive={props.burgerNavInactive}
        nav={props.nav}
      ></Header>
      <main className="main">
        <section className="section-profile">
          <form
            className={`profile ${props.nav ? "profile_background-activ" : ""}`}
            name="profile"
            noValidate
            onSubmit={onLogin}
          >
            <h1 className="profile__title">Привет, Виталий!</h1>
            <div className="profile__main">
              <div className="profile__inner">
                <label className="profile__inner-text">Имя</label>
                <input
                  className="profile__input"
                  type="text"
                  name="text"
                  onChange={handleChange}
                  placeholder="Введите имя"
                  value="Виталий"
                  required
                ></input>
              </div>

              <div className="profile__inner">
                <label className="profile__inner-text">E-mail</label>
                <input
                  className="profile__input"
                  type="email"
                  name="email"
                  placeholder="Введите email"
                  onChange={handleChange}
                  value="pochta@yandex.ru"
                  required
                ></input>
              </div>
            </div>
            <div className="profile__container">
              <span className="profile__text-error profile__text-error_active">
                Текст ошибки
              </span>
              <button className="profile__submit" type="submit">
                Сохранить
              </button>
              <div className="profile__wrap">
                <Link className="profile__link" to="/signin">
                  Редактировать
                </Link>
                <Link className="profile__link profile__link_color" to="/">
                  Выйти из аккаунта
                </Link>
                {/* пока линк потом будет кнопка */}
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
