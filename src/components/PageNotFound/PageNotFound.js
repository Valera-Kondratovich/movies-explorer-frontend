import React from "react";
import { Link,useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <main className="main">
      <section className="section-not-found">
        <div className="not-found">
          <div className="not-found__wrap">
            <span className="not-found__text">404</span>
            <h1 className="not-found__title">Страница не найдена</h1>
          </div>
          <button className="not-found__button" type="button" onClick={handleBack}>
            Назад
          </button>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
