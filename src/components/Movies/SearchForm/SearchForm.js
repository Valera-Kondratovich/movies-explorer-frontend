import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function SearchForm(props) {

    //будем проверять что ввел пользователь
    const [movieInput, setMovieInput] = useState('');

    //ошибка по умолчанию если инпуты пустые
    const [movieError, setMovieError] = useState('');


    //меняем стейт если пользователь поставил курсор в инпут
const focusHandler = (e) => {
  // eslint-disable-next-line default-case
  switch (e.target.name) {
    case ('search__input'):

      break;
  }
}

// валидируем вводимые данные пользователем
const movieHandler = (e) => {
  focusHandler(e);
  setMovieInput(e.target.value)
}
  const onSearch = (e) => {
    e.preventDefault();
    const keyword = movieInput;
    if (!keyword) {
      setMovieError('Нужно ввести ключевое слово')
    }
    else {
      setMovieError('');
      props.handleKeyword(keyword);
    }
  };


  return (
    <section className="section-search">
      <form className="search" name="search"
      onSubmit={onSearch}
      noValidate>
        <div className="search__wrap">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            name="search__input"
            value={movieInput}
            onChange={movieHandler}
            required
          ></input>
          <button className="search__button" type="submit">
            Найти
          </button>
        </div>
        <span className={`search__input-error ${movieError ? "search__input-error_visible" : ""}`}>{movieError}</span>
        <div className="search__inner">
          <label className="search__switch">
            <input name="short__input" className="search__checkbox"  onChange={props.handleShort} type="checkbox" checked={props.short}></input>
            <span className="search__slider"></span>
          </label>
          <span className="search__short-films">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
