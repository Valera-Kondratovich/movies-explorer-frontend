import React, { useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies(props) {

 const [foundMovies, setFoundMovies] = useState([])

  function search (searchValue) {
if (searchValue.short) {
  JSON.parse(localStorage.getItem('movies')).filter(element => element.nameRu === searchValue.keyword)
}
else {
console.log(JSON.stringify(searchValue.keyword));

const movies = JSON.parse(localStorage.getItem('movies'));
const resultat = movies.filter(({ nameRU, nameEN }) => {
  return ((nameRU.toLowerCase().includes(searchValue.keyword.toLowerCase()) ||
      nameEN.toLowerCase().includes(searchValue.keyword.toLowerCase())))})
      setFoundMovies(resultat)
console.log(resultat);
}
  }



  return (
    <>
      <Header
        login={props.login}
        burgerNav={props.burgerNav}
        burgerNavInactive={props.burgerNavInactive}
        nav={props.nav}
      ></Header>
      <main className="main">
        <SearchForm nav={props.nav} searchValue={search}></SearchForm>
        <MoviesCardList
          nav={props.nav}
          buttonDownloadStatus={props.buttonDownloadStatus}
          movies={foundMovies}
        ></MoviesCardList>
      </main>
      <Footer nav={props.nav}></Footer>
    </>
  );
}

export default Movies;
