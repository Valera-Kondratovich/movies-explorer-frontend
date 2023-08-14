import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  console.log(props.buttonDownloadStatus);

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

export default SavedMovies;
