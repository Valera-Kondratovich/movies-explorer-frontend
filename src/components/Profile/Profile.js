import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { UserContext } from "../Context/UserContext/UserContext";
import mainApi from "../../utils/MainApi"
import * as auth from "../../utils/Auth"

function Profile(props) {
  const navigate = useNavigate();
  const currentUser = useContext(UserContext);
console.log(currentUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTitle, setNameTitle] = useState(currentUser.name)
  const [inputValid, setInputValid] = useState(false)
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setNameTitle(currentUser.name)

  }, [currentUser.name, currentUser.email]);

  function handleInputValidEnabled (e) {
    setInputValid(true)
    console.log(inputValid);
  }

  function handleInputValidDisabled () {
    setInputValid(false)
  }
  const [formValue, setFormValue] = useState({name: currentUser.name, email: currentUser.email,});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  // стейт хранит ошибки приходящие с сервера
  const [errorServerMessage, setErrorServerMessage] = useState('');



    // следим за состоянием стоит ли курсор в инпуте
    const [nameInputFocus, setNameInputFocus] = useState(false);
    const [emailInputFocus, setEmailInputFocus] = useState(false);

    //ошибка по умолчанию если инпуты пустые
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

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

  }
}

// валидируем вводимые данные пользователем
const nameHandler = (e) => {
  focusHandler(e);
  setName(e.target.value)
  const reg = /[a-z\-а-яё\s]/igm;

  if (!reg.test(String(e.target.value))) {
    setNameError('Ввели не корректное Имя')
    if (!e.target.value) {
      setNameError('Поле имя не может быть пустым')
    }
  }
  else {
    if (currentUser.name===e.target.value) {
      setNameError('Введенное Имя совпадает с предыдущим именем')
    }
    else{
    setNameError('');
    handleChange(e)
    }
  }
}
const emailHandler = (e) => {
  focusHandler(e);
  setEmail(e.target.value)
  const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!reg.test(String(e.target.value).toLowerCase())) {
    setEmailError('Ввели не корректный email')
    if (!e.target.value) {
      setEmailError('Email не может быть пустым')
    }
  }
  else {
    if (currentUser.email===e.target.value) {
      setEmailError('Введенное email совпадает с предыдущим email')
    }
    else {
    setEmailError('');
    handleChange(e)
    }
  }
}

useEffect (()=> {
  if (nameError || emailError ) {
    setFormValid(false)
  }
  else {
    setFormValid(true)
  }
}, [nameError, emailError]);

  function onUpdateProfile(e) {
    e.preventDefault();
  const email = formValue.email;
  const name = formValue.name;
  mainApi.patchUserData({
      name: name,
      email: email,
    })
    .then((dataUser)=> {
      setErrorServerMessage('')
      setName(dataUser.name);
    setEmail(dataUser.email);
    setNameTitle(dataUser.name);
    setInputValid(false)

    })
  .catch(err=> {console.log(err);
    setErrorServerMessage(err.message);
  });
  }

  function onSignOut(){
    auth
      .logout()
      .then((res) => {
        if (res.ok) {
          props.handleLogOut();
          navigate("/")
        }
  })
      .catch((err) => console.log(err));
}


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
            onSubmit={onUpdateProfile}
          >
            <h1 className="profile__title">{`Привет, ${nameTitle}!`}</h1>
            <div className="profile__main">
              <div className="profile__inner">
                <label className="profile__inner-text">Имя</label>
                <input
                  className="profile__input"
                  type="text"
                  name="name"
                  onChange={nameHandler}
                  placeholder="Введите имя"
                  value={name}
                  disabled={!inputValid}
                  required
                ></input>
              </div>
                <span className={`profile__input-error ${(nameInputFocus && nameError) ? "profile__input-error_visible" : ""}`}>{nameError}</span>

              <div className="profile__inner">
                <label className="profile__inner-text">E-mail</label>
                <input
                  className="profile__input"
                  type="email"
                  name="email"
                  placeholder="Введите email"
                  onChange={emailHandler}
                  value={email}
                  disabled={!inputValid}
                  required
                ></input>
              </div>
                <span className={`profile__input-error ${(emailInputFocus && emailError) ? "profile__input-error_visible" : ""}`}>{emailError}</span>
            </div>

{ !inputValid ? (
              <div className="profile__container">
              <div className="profile__wrap">
                <button onClick={handleInputValidEnabled} className="profile__link" type="button">
                  Редактировать
                </button>
                <button onClick={onSignOut} className="profile__link profile__link_color">
                  Выйти из аккаунта
                </button>
              </div>
            </div>
 ) : (
  <div className="profile__container">
  <span className="profile__text-error profile__text-error_active">
    {errorServerMessage}
  </span>
  <button  disabled={!formValid} className={`profile__submit ${!formValid ? 'profile__submit_disabled' : ''}`} type="submit">
    Сохранить
  </button>
</div>
)}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
