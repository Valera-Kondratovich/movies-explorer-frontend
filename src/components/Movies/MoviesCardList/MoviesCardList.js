import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link, useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonDownload from "../ButtonDownload/ButtonDownload";
import useCountMovies from "../../../utils/countMovies";

function MoviesCardList(props) {
  const location = useLocation();
  // объект хранит numberMovies(сколько фильмов отобразить сразу), numberMoviesExtra (сколько фильмов подгружать после нажатия еще)
const countFilms = useCountMovies();


// длина массива для сравнения с числом найденых фильмов

//статус отображения кнопки еще
const [statusButton, setStatusButton] = useState(false)

//обрезанный массив
const [arrFilms, setArrFilms] = useState([])
// const arrfilms=allFoundMovies.slice(0, countFilms.numberMovies+(countFilms.numberMoviesExtra * count))

//эффкект проверяет если счетчик изменился или если изменился массив с найденными фильмами, то добавляем фильмы
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
}, [props.count, props.foundMovies, arrFilms.length, location.pathname])


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

 const movieIsSaved = ({ id }) => {
  if (Array.isArray(props.savedMovies)) {
    return props.savedMovies.filter(m => m.movieId === id).length;
  }}


  return (
    <section className="section-cards">
      <div className="card-list">
        {(props.foundMovies.length) ? (arrFilms.map((movie)=>{
          return (
          <MoviesCard key={flag ? movie.id : movie._id} image={movie.image.url} name={movie.nameRU} duration={movie.duration} trailerLink={movie.trailerLink} handleSaveMovie={props.handleSaveMovie} handleDeleteMovie={props.handleDeleteMovie} movie={movie} movieIsSaved={movieIsSaved}
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
