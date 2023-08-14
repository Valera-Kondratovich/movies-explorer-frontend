import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";

function Techs() {
  return (
    <>
      <section className="techs">
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
        <div className="techs__container">
          <p className="techs__text">HTML</p>
          <p className="techs__text">CSS</p>
          <p className="techs__text">JS</p>
          <p className="techs__text">React</p>
          <p className="techs__text">Git</p>
          <p className="techs__text">Express.js</p>
          <p className="techs__text">mongoDB</p>
        </div>
      </section>
    </>
  );
}

export default Techs;
