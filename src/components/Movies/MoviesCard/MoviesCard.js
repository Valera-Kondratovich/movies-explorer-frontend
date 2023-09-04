import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";


function MoviesCard(props) {


  const location = useLocation();

  return (
    <div className="card">
      <a className="card__link" target="_blank" rel="noreferrer" href={props.trailerLink}>
      <img
        className="card__img"
        src={`https://api.nomoreparties.co${props.image}`}
        alt={`Название фильма: ${props.nameRU}`}
      />
      </a>
      <div className="card__group">
        <h2 className="card__title">{props.name}</h2>
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
      <span className="card__time">{(props.duration<60) ? `${props.duration % 60}м` : `${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}</span>
    </div>
  );
}

export default MoviesCard;
