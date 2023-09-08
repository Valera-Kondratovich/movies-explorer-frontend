import React, { useEffect, useState } from "react";
import {
  useLocation,
} from "react-router-dom";


function MoviesCard(props) {
  const location = useLocation();
  const [flag, setFlag] = useState(null)
  const handleFlag = () => {
   if (location.pathname === "/movies") {
     return setFlag(true)
   }
   if (location.pathname === "/saved-movies") {
     return setFlag(false)
   }
  }

  useEffect(()=>{
    handleFlag()
  }, [location.pathname, flag])


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
          {flag ? (
            <button
              onClick={()=> props.movieSave(props.movie.id) ? props.handleDeleteMovie(props.movie) : props.handleSaveMovie(props.movie)}
              className={`card__button ${props.movieSave(props.movie.id) ? 'card__button_saved': 'card__button_unsaved'}`}
              type="button"
            />
          ) : (
            <button
              onClick={()=> props.handleDeleteMovie(props.movie)}
              className="card__button-delite"
              type="button"
            />)

          }

        </div>
      </div>
      <span className="card__time">{(props.duration<60) ? `${props.duration % 60}м` : `${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}</span>
    </div>
  );
}

export default MoviesCard;
