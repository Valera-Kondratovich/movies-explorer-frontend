import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";

function Techs(props) {
  return (
    <>
      <section className={`techs ${props.nav && "techs_background-activ"}`}>
        <div className="techs__row">
          <h2 className="techs__title">Технологии</h2>
        </div>
        <div className="techs__inner">
          <h3 className="techs__sybtitle">7 технологий</h3>
          <p className="techs__desc">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__container">
          <li key={1} className="techs__text">
            HTML
          </li>
          <li key={2} className="techs__text">
            CSS
          </li>
          <li key={3} className="techs__text">
            JS
          </li>
          <li key={4} className="techs__text">
            React
          </li>
          <li key={5} className="techs__text">
            Git
          </li>
          <li key={6} className="techs__text">
            Express.js
          </li>
          <li key={7} className="techs__text">
            mongoDB
          </li>
        </ul>
      </section>
    </>
  );
}

export default Techs;
