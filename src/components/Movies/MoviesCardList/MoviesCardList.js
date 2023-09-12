import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonDownload from "../ButtonDownload/ButtonDownload";
import useCountMovies from "../../../utils/countMovies";

function MoviesCardList(props) {
  const location = useLocation();
  // объект хранит numberMovies(сколько фильмов отобразить сразу), numberMoviesExtra (сколько фильмов подгружать после нажатия еще)
const countFilms = useCountMovies();

//статус отображения кнопки еще
const [statusButton, setStatusButton] = useState(false)

//обрезанный массив
const [arrFilms, setArrFilms] = useState([])

//эффект проверяет если счетчик изменился или если изменился массив с найденными фильмами, то добавляем фильмы
useEffect(()=>{
if (location.pathname === "/movies") {
  if (arrFilms.length===props.foundMovies.length) {
    setStatusButton(false)
  }
  else {
    setStatusButton(true)
    setArrFilms(props.foundMovies.slice(0, countFilms.numberMovies+(countFilms.numberMoviesExtra * props.count)));
  }}
  if(location.pathname === "/saved-movies") {
    setArrFilms(props.foundMovies)
    setStatusButton(false)
  }
  handleFlag()
}, [props.count, props.foundMovies, arrFilms.length, location.pathname, countFilms.numberMovies, countFilms.numberMoviesExtra ])


//стейт который помогает определить какой массив фильмов пришел с /movies или с /saved-moviews
const [flag, setFlag] = useState(null)
 const handleFlag = () => {
  if (location.pathname === "/movies") {
    return setFlag(true)
  }
  if (location.pathname === "/saved-movies") {
    return setFlag(false)
  }
 }

 const movieSave = ( id ) => {
  if (Array.isArray(props.saveMovies)) {
    return props.saveMovies.filter(m => m.movieId === id).length;
  }
          return false;
        }


  const getSavedMovie = (movie) => {
    if ('_id' in movie) {
      return movie;
    }

    if (Array.isArray(props.saveMovies)) {
      const [saved] = props.saveMovies.filter(m => m.movieId === movie.id) || [null];

      return saved;
    }
  };

  return (
    <section className="section-cards">
      <div className="card-list">
        {(props.foundMovies.length) ? (arrFilms.map((movie)=>{
          return (
          <MoviesCard key={flag ? movie.id : movie._id} name={movie.nameRU} duration={movie.duration} trailerLink={movie.trailerLink} handleSaveMovie={props.handleSaveMovie} handleDeleteMovie={() => props.handleDeleteMovie(getSavedMovie(movie))} movie={movie} movieSave={movieSave}
          />
          );
          })) : "Ничего не найдено"}

      </div>
      {statusButton ? (
        <ButtonDownload addMovies={props.counterIncrease}/>
      ) : (
        <div className="empty-place"></div>
      )}
    </section>
  );
}

export default MoviesCardList;
