import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function SearchForm(props) {
  return (
    <section
      className={`section-search ${
        props.nav && "section-search_background-activ"
      }`}
    >
      <form className="search" name="search" noValidate>
        <div className="search__wrap">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            name="search__input"
          ></input>
          <button className="search__button" type="submit">
            Найти
          </button>
        </div>
        <div className="search__inner">
          <label className="search__switch">
            <input className="search__checkbox" type="checkbox"></input>
            <span className="search__slider"></span>
          </label>
          <span className="search__short-films">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
