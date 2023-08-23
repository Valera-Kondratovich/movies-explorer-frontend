import React from "react";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

function Navigation(props) {
  return (
    <>
      <button
        type="button"
        className={`burger-btn ${props.background ? "" : "burger-btn_color"}`}
        onClick={props.burgerNav}
      >
        {props.nav ? (
          <AiOutlineClose
            size={28}
            onClick={props.burgerNavInactive}
            className="burger-btn_color-close"
          />
        ) : (
          <AiOutlineMenu size={28} />
        )}
      </button>

      {props.nav ? (
        <MobileMenu
          burgerNavInactive={props.burgerNavInactive}
          nav={props.nav}
        />
      ) : (
        <DesktopMenu background={props.background} />
      )}
    </>
  );
}

export default Navigation;

{
  /* <div className={`header__menu ${props.nav ? "header__menu_active" : ""} ${props.background ? "":"header__menu_color"}`} onClick={props.burgerNavInactive}>
      <nav className={`menu ${props.nav ? "menu_mobile-active" : ""} ${props.background ? "menu_color":""}`} onClick={e => e.stopPropagation()}>

      </nav>
      </div> */
}

{
  /* <ul className="menu__wrap-link">
          {props.nav && (
            <li>
              <NavLink className={`menu__link ${props.background ? "":"menu__link_color"}`} to="/" onClick={props.burgerNavInactive}>
                Главная
              </NavLink>
            </li>
          )}
          <li key={1}>
            <NavLink className={`menu__link ${props.background ? "":"menu__link_color"}`} to="/movies" onClick={props.burgerNavInactive}>
              Фильмы
            </NavLink>
          </li>
          <li key={2}>
            <NavLink className={`menu__link ${props.background ? "":"menu__link_color"}`} to="/saved-movies" onClick={props.burgerNavInactive}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <ul className="menu__wrap-link-profile">
          <li key={3}>
            <NavLink className={`menu__link-profile ${props.background ? "":"menu__link-profile_color"}`} to="/profile" onClick={props.burgerNavInactive}>
              Аккаунт
            </NavLink>
          </li>
        </ul> */
}
