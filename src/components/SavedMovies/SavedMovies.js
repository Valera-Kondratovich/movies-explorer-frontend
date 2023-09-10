import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
//счетчик на который будем умножать , что бы увеличить массив отображаемых фильмов
//const [count, setCount] = useState(0)

//стейт найденных фильмов по ключевому слову НУЖНО ВЫВЕСТИ НА УРОВЕНЬ ВЫШЕ
 const [foundMoviess, setFoundMoviess] = useState((JSON.parse(localStorage.getItem('foundFromSaveMovies')) !== null) ? JSON.parse(localStorage.getItem('foundFromSaveMovies')) : [])

//стейт который хранит поисковый запрос ключевые слова
const [keywords, setKeyword] = useState((JSON.parse(localStorage.getItem('keywordsSavedMovies'))!==null) ? JSON.parse(localStorage.getItem('keywordsSavedMovies')) : '')

//функция которая обновляет стейт посквого запроса
function handleKeyword (keywords) {
 setKeyword(keywords)
 localStorage.setItem('keywordsSavedMovies', JSON.stringify(keywords))
// setCount(0)
}

//стейт чекбокса
const [short, setShort] = useState((JSON.parse(localStorage.getItem('chekboxSavedMovies'))!==null) ? JSON.parse(localStorage.getItem('chekboxSavedMovies')) : false)

const [isPreloader, setIsPreloader] = useState(false);

//функция меняет состояние чекбокса
function handleShort () {
 setShort(!short)
 localStorage.setItem('chekboxSavedMovies', JSON.stringify(!short))
}


useEffect(()=>{
  setIsPreloader(false)
    if (short) {
    const resultat = props.movies.filter(({ nameRU, nameEN, duration }) => {
      return ((nameRU.toLowerCase().includes(keywords.toLowerCase()) ||
          nameEN.toLowerCase().includes(keywords.toLowerCase()))
          && (duration <= 40)
          )
        })
        localStorage.setItem('foundFromSaveMovies', JSON.stringify(resultat))
        setFoundMoviess(resultat)
  }
  else{
  const resultat = props.movies.filter(({ nameRU, nameEN }) => {
    return ((nameRU.toLowerCase().includes(keywords.toLowerCase()) ||
        nameEN.toLowerCase().includes(keywords.toLowerCase())))})
        localStorage.setItem('foundFromSaveMovies', JSON.stringify(resultat))
        setFoundMoviess(resultat)
}}
, [short, keywords, props.movies, isPreloader])

  return (
    <>
      <Header
        login={props.login}
        burgerNav={props.burgerNav}
        burgerNavInactive={props.burgerNavInactive}
        nav={props.nav}
      ></Header>
      <main className="main">
        <SearchForm nav={props.nav} handleKeyword={handleKeyword} handleShort={handleShort} short={short} keyword={keywords} setIsPreloader={setIsPreloader}></SearchForm>
        {isPreloader ? <Preloader/> :
        <MoviesCardList
          nav={props.nav}
          buttonDownloadStatus={props.buttonDownloadStatus}
          //передаю список сохраненных фильмов
          foundMovies={foundMoviess}
          handleDeleteMovie={props.handleDeleteMovie}
        ></MoviesCardList>
  }
      </main>
      <Footer nav={props.nav}></Footer>
    </>
  );
}

export default SavedMovies;
