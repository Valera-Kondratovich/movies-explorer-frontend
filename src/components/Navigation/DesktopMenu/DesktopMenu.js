import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./DesktopMenu.css";

function DesktopMenu(props) {
  const location = useLocation();
  return (
    <>
      <nav className={`menu ${props.background ? "" : "menu_distance"}`}>
        <ul
          className={`menu__wrap-link ${
            props.background ? "" : "menu__wrap-link_position"
          }`}
        >
          <li key={1}>
            <NavLink
              className={`menu__link ${
                props.background ? "" : "menu__link_color"
              } ${(location.pathname === '/movies' ? 'menu__link_active' : '')}`}
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li key={2}>
            <NavLink
              className={`menu__link ${
                props.background ? "" : "menu__link_color"
              } ${(location.pathname === '/saved-movies' ? 'menu__link_active' : '')}`}
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <ul className="menu__wrap-link-profile">
          <li key={3}>
            <NavLink
              className={`menu__link-profile ${
                props.background ? "" : "menu__link-profile_color"
              }`}
              to="/profile"
            >
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default DesktopMenu;
