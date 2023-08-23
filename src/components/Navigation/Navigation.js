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
