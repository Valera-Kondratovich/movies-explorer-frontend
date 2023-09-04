import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import img from "../../../images/film.jpg";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonDownload from "../ButtonDownload/ButtonDownload";
import useCountMovies from "../../../utils/countMovies";

function MoviesCardList(props) {
  const countFilms = useCountMovies();
console.log(countFilms.numberMovies);
const arrfilms = props.movies.slice(0, countFilms.numberMovies)
console.log(arrfilms);




  return (
    <section className="section-cards">
      <div className="card-list">
        {(props.movies.length) ? (arrfilms.map((element)=>{
          return (
          <MoviesCard image={element.image.url} name={element.nameRU} duration={element.duration} trailerLink={element.trailerLink}
          />
          );
          })) : "Ничего не найдено"}

      </div>
      {props.buttonDownloadStatus ? (
        <ButtonDownload />
      ) : (
        <div className="empty-place"></div>
      )}
    </section>
  );
}

export default MoviesCardList;
