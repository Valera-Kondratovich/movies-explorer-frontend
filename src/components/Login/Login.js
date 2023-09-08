import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoPath from "../../images/logo.svg";


function Login(props) {

  // стейт хранит ошибки приходящие с сервера
  const [errorServerMessage, setErrorServerMessage] = useState('')

  //будем проверять что ввел пользователь
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // следим за состоянием стоит ли курсор в инпуте
  const [emailInputFocus, setEmailInputFocus] = useState(false);
  const [passwordInputFocus, setPasswordInputFocus] = useState(false);

  //ошибка по умолчанию если инпуты пустые
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

  //состояние валидна ли форма
  const [formValid, setFormValid] = useState(false)

  //стейт хранит данные пользователя приходящие с сервера
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  // функция сохраняет данные о пользователе полученные с сервера
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({
      ...formValue,
      [name]: value,
    })
  };


  const onLogin = (e) => {
    e.preventDefault();
       const email = formValue.email;
       const password = formValue.password;
    props.handleSignIn(password, email)
  };

//если пользователь поставил курсор с инпута меняем стейт
  const focusHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'email':
        setEmailInputFocus(true)
        break
      case 'password':
        setPasswordInputFocus(true)
        break
    }
  }

//валидируем что вводит пользователь
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
      handleChange(e);
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

  useEffect(()=> {
if (emailError || passwordError) {
  setFormValid(false)
}
else {
  setFormValid(true)

}

  }, [emailError, passwordError])

  return (
    <main className="main">
      <section className="section-login">
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
                value={emailInput}
                className="login__input"
                type="email"
                placeholder="Введите email"
                name="email"
                onChange={e => emailHandler(e)}
                required
              ></input>
              <span className={`login__input-error ${(emailInputFocus && emailError) ? "login__input-error_visible" : ""}`}>{emailError}</span>
            </div>

            <div className="login__inner">
              <label className="login__inner-text">Пароль</label>
              <input
              value={passwordInput}
                className="login__input"
                type="password"
                placeholder="Введите пароль"
                name="password"
                onChange={passwordHandler}
                required
              ></input>
              <span className={`login__input-error ${(passwordInputFocus && passwordError) ? "login__input-error_visible" : ""}`}>{passwordError}</span>
            </div>
          </div>
          <div className="login__container">
            <span className="login__text-error">
              {errorServerMessage}
            </span>
            <button disabled={!formValid} className={`login__submit ${!formValid ? 'login__submit_disabled' : ''}`} type="submit">
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
