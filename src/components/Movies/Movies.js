import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";


function Movies(props) {
//счетчик на который будем умножать , что бы увеличить массив отображаемых фильмов
const [count, setCount] = useState(0)

//функция которая увеличивает счетчик при нажатии еще
function counterIncrease() {
  setCount(count+1)
}

const [isPreloader, setIsPreloader] = useState(false);
//стейт найденных фильмов по ключевому слову 
 const [foundMovies, setFoundMovies] = useState((JSON.parse(localStorage.getItem('foundMovies')) !== null) ? JSON.parse(localStorage.getItem('foundMovies')) : [])

 //стейт который хранит поисковый запрос ключевые слова
 const [keyword, setKeyword] = useState((JSON.parse(localStorage.getItem('keyword'))!==null) ? JSON.parse(localStorage.getItem('keyword')) : '')

 //функция которая обновляет стейт посквого запроса
 function handleKeyword (keywords) {
  setKeyword(keywords)
  localStorage.setItem('keyword', JSON.stringify(keywords))
  setCount(0)
 }

//стейт чекбокса
const [short, setShort] = useState((JSON.parse(localStorage.getItem('chekbox'))!==null) ? JSON.parse(localStorage.getItem('chekbox')) : false)

//функция меняет состояние чекбокса
function handleShort () {
  setShort(!short)
  localStorage.setItem('chekbox', JSON.stringify(!short))
}


useEffect(()=>{
if(keyword==='') {
  setFoundMovies([])
}
else {
    if (short) {

    const resultat = props.movies.filter(({ nameRU, nameEN, duration }) => {
      return ((nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
          nameEN.toLowerCase().includes(keyword.toLowerCase()))
          && (duration <= 40)
          )
        })
        localStorage.setItem('foundMovies', JSON.stringify(resultat))
        setFoundMovies(resultat)

  }
  else{
  const resultat = props.movies.filter(({ nameRU, nameEN }) => {
    return ((nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
        nameEN.toLowerCase().includes(keyword.toLowerCase())))})
        localStorage.setItem('foundMovies', JSON.stringify(resultat))
        setFoundMovies(resultat)
}}
setIsPreloader(false)
}
, [short, keyword, props.movies])

  return (
    <>
      <Header
        login={props.login}
        burgerNav={props.burgerNav}
        burgerNavInactive={props.burgerNavInactive}
        nav={props.nav}
      ></Header>
      <main className="main">
        <SearchForm nav={props.nav} handleKeyword={handleKeyword} handleShort={handleShort} short={short} keyword={keyword} setIsPreloader={setIsPreloader}></SearchForm>
        <MoviesCardList
          nav={props.nav}
          buttonDownloadStatus={props.buttonDownloadStatus}
          //массив найденных фильмов по ключевым словам
          foundMovies={foundMovies}
          //массив сохраненных фильмов пользователем
          saveMovies={props.saveMovies}
          //функция увеличения счетчика
          counterIncrease={counterIncrease}
          //сам счетчик
          count={count}
          //функция сохранения фильма
          handleSaveMovie={props.handleSaveMovie}
          //функция удаления фильма
          handleDeleteMovie={props.handleDeleteMovie}
          isPreloader={isPreloader}
        ></MoviesCardList>
      </main>
      <Footer nav={props.nav}></Footer>
    </>
  );
}

export default Movies;
