import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <>
      <Header
        login={props.login}
        burgerNav={props.burgerNav}
        nav={props.nav}
      ></Header>
      <main className="main">
        <SearchForm nav={props.nav}></SearchForm>
        <MoviesCardList
          nav={props.nav}
          buttonDownloadStatus={props.buttonDownloadStatus}
        ></MoviesCardList>
      </main>
      <Footer nav={props.nav}></Footer>
    </>
  );
}

export default SavedMovies;
