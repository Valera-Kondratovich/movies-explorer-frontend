import React from "react";

import { NavLink, Link } from "react-router-dom";

function NavTab() {
  return (
    <nav className="nav-tab__wrap-auth">
      <Link className="nav-tab__link-auth" to="/signin">
        Регистрация
      </Link>
      <Link className="nav-tab__link-auth nav-tab__link-auth_font" to="/signin">
        Войти
      </Link>
    </nav>
  );
}

export default NavTab;
