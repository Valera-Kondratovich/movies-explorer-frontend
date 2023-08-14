import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";

function Footer() {
  return (
    <>
      <section className="footer">
        <p className="footer__desc">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__wrap">
          <span className="footer__copyright">© 2023</span>
          <ul className="footer__list">
            <li className="footer__text">
              <Link
                className="footer__link"
                to="https://practicum.yandex.ru/"
                target="_blank"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li className="footer__text">
              <Link
                className="footer__link"
                to="https://github.com/Valera-Kondratovich"
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Footer;
