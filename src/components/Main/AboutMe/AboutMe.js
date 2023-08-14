import React from "react";
import imgStudentPath from "../../../images/fotoStudent.jpg";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";

function AboutMe() {
  return (
    <>
      <section className="about-me">
        <div className="about-me__row">
          <h2 className="about-me__title">Студент</h2>
        </div>
        <div className="about-me__container">
          <div className="about-me__inner">
            <h3 className="about-me__subject">Виталий</h3>
            <p className="about-me__prof">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__desc">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <Link
              className="about-me__github"
              to="https://github.com/Valera-Kondratovich"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <img
            className="about-me__foto-student"
            alt="фотография студента"
            src={imgStudentPath}
          ></img>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
