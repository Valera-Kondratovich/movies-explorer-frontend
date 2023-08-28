import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import img from "../../../images/film.jpg";

function MoviesCard(props) {
  const films = {
    name: "33 слова",
    likes: true,
    srcc: "../../../images/film.jpg",
    time: "1000",
  };
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.pathname === "/saved-movies");

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
            className={`card__button ${
              location.pathname === "/saved-movies" ? "card__button-delite" : ""
            }`}
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
