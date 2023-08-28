import React from "react";
import imgMapPath from "../../../images/maps_header.svg";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__wrap">
        <div className="promo__inner">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img
          className="promo__img-map"
          src={imgMapPath}
          alt="Глобус из слова web"
        ></img>
      </div>
      <Link className="promo__button-more" to="#about-project" reloadDocument>
        Узнать больше
      </Link>
    </section>
  );
}

export default Promo;
