import React from "react";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <>
      <Header
        login={props.login}
        burgerNav={props.burgerNav}
        burgerNavInactive={props.burgerNavInactive}
        nav={props.nav}
      ></Header>
      <main className="main">
        <Promo nav={props.nav} />
        <AboutProject nav={props.nav} />
        <Techs nav={props.nav} />
        <AboutMe nav={props.nav} />
        <Portfolio nav={props.nav} />
      </main>
      <Footer nav={props.nav} />
    </>
  );
}

export default Main;
