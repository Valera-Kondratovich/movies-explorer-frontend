import React from "react";
import { useContext, useState, useEffect } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./MobileMenu.css";

function MobileMenu(props) {
  return (
    <>
      <div className="menu-mobile" onClick={props.burgerNavInactive}>
        <nav
          className="menu-mobile__content"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="menu-mobile__wrap-link">
            <li key={1}>
              <NavLink
                className="menu-mobile__link"
                to="/"
                onClick={props.burgerNavInactive}
              >
                Главная
              </NavLink>
            </li>
            <li key={2}>
              <NavLink
                className="menu-mobile__link"
                to="/movies"
                onClick={props.burgerNavInactive}
              >
                Фильмы
              </NavLink>
            </li>
            <li key={3}>
              <NavLink
                className="menu-mobile__link"
                to="/saved-movies"
                onClick={props.burgerNavInactive}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <ul className="menu-mobile__wrap-link-profile">
            <li key={4}>
              <NavLink
                className="menu-mobile__link-profile"
                to="/profile"
                onClick={props.burgerNavInactive}
              >
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
