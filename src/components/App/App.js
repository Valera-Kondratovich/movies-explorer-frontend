import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import moviesApi from "../../utils/MoviesApi";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { UserContext } from "../Context/UserContext/UserContext";
import mainApi from "../../utils/MainApi";

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    tokenCheck()
  }, []);

  function tokenCheck() {
    mainApi
      .getUserData()
      .then((res) => {
        setLoggedIn(true);
         setCurrentUser(res);
        navigate("/movies");

      })
      .catch((err) => console.log(err));
  }
  function handleLogin(dataUser) {
    setLoggedIn(true);
    setCurrentUser(dataUser);
  };



  const [nav, setNav] = useState(false);
  function handleBurgerMenu() {
    setNav(!nav);
  }
  function handleBurgerMenuInactive() {
    setNav(false);
  }

  function handleLogOut() {
    setCurrentUser({});
    setLoggedIn(false)
  }
 const [errorServerMessage, setErrorServerMessage] = useState('');
//  const [movies, setMovies] = useState([]);
 const [saveMovies, setSaveMovires] = useState([]);

// стейт всех фильмов из локал сторедж
const [movies, setFilms] = useState('');

 useEffect(() =>{
 if (loggedIn) {
   moviesApi.getAllMovies()
   .then((movies) => {
    localStorage.setItem('movies', JSON.stringify(movies))
    setFilms(JSON.parse(localStorage.getItem('movies')))})
   .catch((err) => {
    console.log(err)
    setErrorServerMessage(err)
  })
 }
 else {
  localStorage.setItem('movies', JSON.stringify([]))
 }
}, [loggedIn])
  return (
    <>
    <UserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              login={loggedIn}
              burgerNav={handleBurgerMenu}
              burgerNavInactive={handleBurgerMenuInactive}
              nav={nav}
            />
          }
        ></Route>
        <Route path="/signin" element={<Login nav={nav} handleLogin={handleLogin}/>}></Route>
        <Route path="/signup" element={<Register nav={nav} handleLogin={handleLogin}/>}></Route>
        <Route
          path="/profile"
          element={
            <Profile
              login={loggedIn}
              burgerNav={handleBurgerMenu}
              burgerNavInactive={handleBurgerMenuInactive}
              nav={nav}
              handleLogOut={handleLogOut}
            />
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Movies
              buttonDownloadStatus={true}
              login={loggedIn}
              burgerNav={handleBurgerMenu}
              burgerNavInactive={handleBurgerMenuInactive}
              nav={nav}
              movies={movies}
            />
          }
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              buttonDownloadStatus={false}
              login={loggedIn}
              burgerNav={handleBurgerMenu}
              burgerNavInactive={handleBurgerMenuInactive}
              nav={nav}
            />
          }
        ></Route>
        <Route path="*" element={<PageNotFound nav={nav} />} />
      </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
