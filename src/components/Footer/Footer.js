import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
// import * as auth from "../utils/auth";

function Footer(props) {
  return (
    <>
      <footer className={`footer ${props.nav && "footer_background-activ"}`}>
        <p className="footer__desc">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__wrap">
          <span className="footer__copyright">© 2023</span>
          <ul className="footer__list">
            <li key={1} className="footer__text">
              <Link
                className="footer__link"
                to="https://practicum.yandex.ru/"
                target="_blank"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li key={2} className="footer__text">
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
      </footer>
    </>
  );
}

export default Footer;
