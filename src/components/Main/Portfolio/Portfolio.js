import React from "react";
import imgArrowPath from "../../../images/arrow.svg";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";

function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
          <li className="portfolio__wrap">
            <p className="portfolio__text">Статичный сайт</p>
            <Link
              className="portfolio__link"
              to={"https://github.com/Valera-Kondratovich/how-to-learn"}
              target="_blank"
            >
              <img
                className="portfolio__link-img"
                src={imgArrowPath}
                alt="стрелка"
              ></img>
            </Link>
          </li>
          <li className="portfolio__wrap">
            <p className="portfolio__text">Адаптивный сайт</p>
            <Link
              className="portfolio__link"
              to={"https://github.com/Valera-Kondratovich/russian-travel"}
              target="_blank"
            >
              <img
                className="portfolio__link-img"
                src={imgArrowPath}
                alt="стрелка"
              ></img>
            </Link>
          </li>
          <li className="portfolio__wrap">
            <p className="portfolio__text">Одностраничное приложение</p>
            <Link
              className="portfolio__link"
              to={
                "https://github.com/Valera-Kondratovich/react-mesto-api-full-gha"
              }
              target="_blank"
            >
              <img
                className="portfolio__link-img"
                src={imgArrowPath}
                alt="стрелка"
              ></img>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Portfolio;
