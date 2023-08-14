import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import img from "../../../images/film.jpg";

function MoviesCard(props) {
  const films = {
    name: "33 слова",
    likes: true,
    srcc: "../../../images/film.jpg",
    time: "1000",
  };

  return (
    <div className="card">
      <img
        className="card__img"
        src={img}
        alt={`${films.name}`}
        // onClick={handleClick}
      />
      <div className="card__group">
        <h2 className="card__title">{films.name}</h2>
        <div className="card__wrap">
          <button
            className="card__button"
            // className={cardLikeButtonClassName}
            type="button"
            // onClick={handleLikeClick}
          />
        </div>
      </div>
      <span className="card__time">{films.time}</span>
    </div>
  );
}

export default MoviesCard;
