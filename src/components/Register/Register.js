import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoPath from "../../images/logo.svg";
import * as auth from "../../utils/Auth"

function Register({handleLogin}) {
  // стейт хранит ошибки приходящие с сервера
  const [errorServerMessage, setErrorServerMessage] = useState('');

    //будем проверять что ввел пользователь
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    // следим за состоянием стоит ли курсор в инпуте
    const [nameInputFocus, setNameInputFocus] = useState(false);
    const [emailInputFocus, setEmailInputFocus] = useState(false);
    const [passwordInputFocus, setPasswordInputFocus] = useState(false);

    //ошибка по умолчанию если инпуты пустые
    const [nameError, setNameError] = useState('Поле имя не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

    //состояние валидна ли форма
    const [formValid, setFormValid] = useState(false)

    //меняем стейт если пользователь поставил курсор в инпут
const focusHandler = (e) => {
  // eslint-disable-next-line default-case
  switch (e.target.name) {
    case ('name'):
      setNameInputFocus(true)
      break;
    case ('email'):
      setEmailInputFocus(true)
      break;
    case ('password'):
      setPasswordInputFocus(true)
      break;
  }
}

// валидируем вводимые данные пользователем
const nameHandler = (e) => {
  focusHandler(e);
  setNameInput(e.target.value)
  const reg = /[a-z\-а-яё\s]/igm;

  if (!reg.test(String(e.target.value))) {
    setNameError('Ввели не корректное Имя')
    if (!e.target.value) {
      setNameError('Поле имя не может быть пустым')
    }
  }
  else {
    setNameError('');
    handleChange(e)
  }
}
const emailHandler = (e) => {
  focusHandler(e);
  setEmailInput(e.target.value)
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(String(e.target.value).toLowerCase())) {
    setEmailError('Ввели не корректный email')
    if (!e.target.value) {
      setEmailError('Email не может быть пустым')
    }
  }
  else {
    setEmailError('');
    handleChange(e)
  }
}

const passwordHandler = (e) => {
  focusHandler(e);
  setPasswordInput(e.target.value)
  if (e.target.value.length < 2) {
    setPasswordError('Пароль должен быть длинее 1 символа')
    if (!e.target.value) {
      setPasswordError('Пароль не может быть пустым')
    }
  }
  else {
    setPasswordError('');
    handleChange(e);
  }
}

  const [formValue, setFormValue] = useState({
    name: "",
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



  const onRegister = (e) => {
    e.preventDefault();
    const email = formValue.email;
    const password = formValue.password;
    const name = formValue.name;
    auth.register(name, password, email)
    .then(res => res.ok ? res.json() : res.json().then(res => {throw res}))
    .then((dataUser)=> {

      handleLogin(dataUser);
      navigate("/movies");
    })
    .catch((err)=> {console.log(err);
      setErrorServerMessage(err.message)
    })
  };

  useEffect (()=> {
    if (nameError || emailError || passwordError) {
      setFormValid(false)
    }
    else {
      setFormValid(true)
    }
  }, [nameError, emailError, passwordError]);
  return (
    <main className="main">
      <section className="section-register">
        <form
          className="register"
          name="register"
          noValidate
          onSubmit={onRegister}
        >
          <div className="register__header">
            <Link className="register__link" to="/">
              <img className="logo" src={logoPath} alt="логотип" />
            </Link>
            <h1 className="register__title">Добро пожаловать!</h1>
          </div>
          <div className="register__main">
            <div className="register__inner">
              <label className="register__inner-text">Имя</label>
              <input
                className="register__input"
                type="text"
                placeholder="Введите имя"
                name="name"
                value={nameInput}
                onChange={nameHandler}
                required
              ></input>
              <span className={`register__input-error ${(nameInputFocus && nameError) ? "register__input-error_visible" : ""}`}>{nameError}</span>
            </div>

            <div className="register__inner">
              <label className="register__inner-text">E-mail</label>
              <input
                value={emailInput}
                className="register__input"
                type="email"
                placeholder="Введите email"
                name="email"
                onChange={emailHandler}
                required
              ></input>
              <span className={`register__input-error ${(emailInputFocus && emailError) ? "register__input-error_visible" : ""}`}>{emailError}</span>
            </div>

            <div className="register__inner">
              <label className="register__inner-text">Пароль</label>
              <input
                value={passwordInput}
                className="register__input"
                type="password"
                placeholder="Введите пароль"
                name="password"
                onChange={passwordHandler}
                required
              ></input>
              <span className={`register__input-error ${(passwordInputFocus && passwordError) ? "register__input-error_visible" : ""}`}>{passwordError}</span>
            </div>
          </div>
          <div className="register__container">
            <span className="register__text-error register__text-error_active">
              {errorServerMessage}
            </span>
            <button disabled={!formValid} className={`register__submit ${!formValid ? 'register__submit_disabled' : ''}`} type="submit">
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
      </section>
    </main>
  );
}

export default Register;
