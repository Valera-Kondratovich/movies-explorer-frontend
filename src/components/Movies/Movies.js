import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
// все фильмы из локал сторедж
const movies= JSON.parse(localStorage.getItem('movies'));

//стейт найденных фильмов
 const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem('foundMovies')), [])
console.log(foundMovies);


// const qqq= JSON.parse(localStorage.getItem('foundMovies'))
// console.log(typeof qqq);
// console.log(qqq);
 //стейт который хранит поисковый запрос
 const [keyword, setKeyword] = useState('')

 //функция которая обновляет стейт посквого запроса
 function handleKeyword (keywords) {
  setKeyword(keywords)
 }

//стейт чекбокса
const [short, setShort] = useState(JSON.parse(localStorage.getItem('chekbox')),false)

//функция меняет состояние чекбокса
function handleShort () {
  setShort(!short)
  localStorage.setItem('chekbox', JSON.stringify(!short))
}

useEffect(()=>{
  if (keyword===''){ console.log('dsdassdasdasdasdsa')}
  else {
    console.log(short);
    if (short) {
    const resultat = movies.filter(({ nameRU, nameEN, duration }) => {
      return ((nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
          nameEN.toLowerCase().includes(keyword.toLowerCase()))
          && (duration <= 40)
          )
        })
        const widthScreen = window.innerWidth;
        console.log(widthScreen);
        localStorage.setItem('foundMovies', JSON.stringify(resultat))
          setFoundMovies(resultat)
  }
  else{
  const resultat = movies.filter(({ nameRU, nameEN }) => {
    return ((nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
        nameEN.toLowerCase().includes(keyword.toLowerCase())))})
        localStorage.setItem('foundMovies', JSON.stringify(resultat))
        setFoundMovies(resultat)
}}
}, [short, keyword])



//   function search (keyword) {
//     console.log(keyword);
// if (short) {

// }
// else {
// console.log(movies);

// const resultat = movies.filter(({ nameRU, nameEN }) => {
//   return ((nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
//       nameEN.toLowerCase().includes(keyword.toLowerCase())))})
//       setFoundMovies(resultat)
// console.log(resultat);
// }
//   }

  return (
    <>
      <Header
        login={props.login}
        burgerNav={props.burgerNav}
        burgerNavInactive={props.burgerNavInactive}
        nav={props.nav}
      ></Header>
      <main className="main">
        <SearchForm nav={props.nav} handleKeyword={handleKeyword} handleShort={handleShort} short={short}></SearchForm>
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
