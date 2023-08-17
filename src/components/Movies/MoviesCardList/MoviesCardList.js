import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import img from "../../../images/film.jpg";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonDownload from "../ButtonDownload/ButtonDownload";

function MoviesCardList(props) {
  return (
    <section
      className={`section-cards ${
        props.nav && "section-cards_background-activ"
      }`}
    >
      <div className="card-list">
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        {/* <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard> */}
        {/* <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard> */}
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
