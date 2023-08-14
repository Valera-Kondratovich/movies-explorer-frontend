import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  console.log(props.buttonDownloadStatus);

  // props.buttonDownloadState();
  return (
    <>
      <Header login={props.login}></Header>
      <SearchForm></SearchForm>
      <MoviesCardList
        buttonDownloadStatus={props.buttonDownloadStatus}
      ></MoviesCardList>
      <Footer></Footer>
    </>
  );
}

export default Movies;
