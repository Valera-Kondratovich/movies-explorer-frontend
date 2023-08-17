import React from "react";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <>
      <nav className={`menu ${props.nav && "menu_mobile-active"}`}>
        <ul className="menu__wrap-link">
          {props.nav && (
            <li>
              <NavLink className="menu__link" to="/">
                Главная
              </NavLink>
            </li>
          )}
          <li key={1}>
            <NavLink className="menu__link" to="/movies">
              Фильмы
            </NavLink>
          </li>
          <li key={2}>
            <NavLink className="menu__link" to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <ul className="menu__wrap-link-profile">
          <li key={3}>
            <NavLink className="menu__link menu__link-profile" to="/profile">
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="burger-btn" onClick={props.burgerNav}>
        {props.nav ? <AiOutlineClose size={29} /> : <AiOutlineMenu size={29} />}
      </div>
    </>
  );
}

export default Navigation;
