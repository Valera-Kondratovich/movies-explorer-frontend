import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <main className="main">
      <section
        className={`section-not-found ${
          props.nav && "not-found_background-activ"
        }`}
      >
        <div className="not-found">
          <div className="not-found__wrap">
            <span className="not-found__text">404</span>
            <h1 className="not-found__title">Страница не найдена</h1>
          </div>
          <Link className="not-found__button" to="/">
            Назад
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
