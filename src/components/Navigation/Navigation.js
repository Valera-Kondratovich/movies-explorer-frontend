import React from "react";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className={`menu ${nav ? "menu_mobile-active" : ""}`}>
        <ul className="menu__wrap-link">
          {nav ? (
            <li>
              {" "}
              <NavLink className="menu__link" to="/">
                Главная
              </NavLink>
            </li>
          ) : (
            <li></li>
          )}
          <li>
            <NavLink className="menu__link" to="/movies">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__link" to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <ul className="menu__wrap-link-profile">
          <li>
            <NavLink className="menu__link menu__link-profile" to="/profile">
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="burger-btn" onClick={() => setNav(!nav)}>
        {nav ? <AiOutlineClose size={29} /> : <AiOutlineMenu size={29} />}
      </div>
    </>
  );
}

export default Navigation;
