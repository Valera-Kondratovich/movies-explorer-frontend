import React, { useState, useEffect } from "react";
import logoPath from "../../images/logo.svg";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import NavTab from "../Main/NavTab/NavTab";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const location = useLocation();
  const [background, setBackground] = useState(false);

  useEffect(() => {
    location.pathname != "/" ? setBackground(true) : setBackground(false);
  }, [location.pathname]);

  return (
    <header
      className={`header ${background ? "header_color" : "header_color-menu"}`}
    >
      <Link className="header__link" to="/">
        <img className="logo" src={logoPath} alt="логотип" />
      </Link>
      {props.login ? (
        <>
          <Navigation
            burgerNav={props.burgerNav}
            burgerNavInactive={props.burgerNavInactive}
            nav={props.nav}
            background={background}
          />
        </>
      ) : (
        <NavTab />
      )}
    </header>
  );
}

export default Header;
