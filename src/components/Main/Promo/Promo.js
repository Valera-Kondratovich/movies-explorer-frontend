import React from "react";
import imgMapPath from "../../../images/maps_header.png";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";

function Promo() {
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
      <button className="promo__button-more">Узнать больше</button>
    </section>
  );
}

export default Promo;
