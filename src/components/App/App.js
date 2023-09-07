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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from "../../utils/Auth"

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
    // tokenCheck()
    setLoggedIn(true);
    setCurrentUser(dataUser);
    navigate("/movies");
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
    setMovies([]);
    setSaveMovies([]);
    localStorage.setItem('movies', JSON.stringify([]))
    localStorage.setItem('saveMovies', JSON.stringify([]))

    setLoggedIn(false)
  }
 const [errorServerMessage, setErrorServerMessage] = useState('');

// стейт всех фильмов из локал сторедж
const [movies, setMovies] = useState((JSON.parse(localStorage.getItem('movies')) !== null) ? JSON.parse(localStorage.getItem('movies')): []);
//стейт сохраненных фильмов пользователя
const [saveMovies, setSaveMovies] = useState([])

 useEffect(() =>{
 if (loggedIn) {
   moviesApi.getAllMovies()
   .then((movies) => {
    localStorage.setItem('movies', JSON.stringify(movies))
    setMovies(movies)
   })
   .catch((err) => {
    console.log(err)
    setErrorServerMessage(err)
  })
  mainApi.getMovies()
  .then((movies)=>{
    localStorage.setItem('saveMovies', JSON.stringify(movies))
    setSaveMovies(movies)
  })

 }
 else {
  localStorage.setItem('movies', JSON.stringify([]))
  localStorage.setItem('saveMovies', JSON.stringify([]))
 }
}, [loggedIn])

useEffect(() => {
  localStorage.setItem('movies', JSON.stringify(movies));
}, [movies]);

useEffect(() => {
  localStorage.setItem('saveMovies', JSON.stringify(saveMovies));
}, [saveMovies]);

function handleSaveMovie (movie) {
mainApi.saveMovie(movie)
.then((movie)=>{
  setSaveMovies([...saveMovies, movie])
})
.catch((err) => {
  console.log(err)
  setErrorServerMessage(err)
})
};

function handleDeleteMovie (movie) {
const idMovie = movie._id;
mainApi.delMovie(idMovie)
.then(()=> {
    setSaveMovies([...saveMovies.filter(movie => movie._id !== idMovie)]);
  })

.catch((err) => {
  console.log(err)
  setErrorServerMessage(err)
})
}


function handleSignIn (password, email) {
  auth.login(password, email)
  .then(res => res.ok ? res.json() : res.json().then(res=> {throw res}))
  .then((dataUser)=> {
      handleLogin(dataUser);
      navigate("/movies")
    })
  .catch(err=> {console.log(err);
    setErrorServerMessage(err.message);
  })
}

function handleSignUp (name, password, email){
  auth.register(name, password, email)
  .then(res => res.ok ? res.json() : res.json().then(res => {throw res}))
  .then((dataUser)=> {
    // handleLogin(dataUser);
    // navigate("/movies");
    handleSignIn (password, email)
  })
  .catch((err)=> {console.log(err);
    setErrorServerMessage(err.message)
  })
}

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
        <Route path="/signin" element={<Login nav={nav}  handleSignIn={handleSignIn}/>}></Route>
        <Route path="/signup" element={<Register nav={nav} handleSignUp={handleSignUp}/>}></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute
            component = {Profile}
              login={loggedIn}
              burgerNav={handleBurgerMenu}
              burgerNavInactive={handleBurgerMenuInactive}
              nav={nav}
              handleLogOut={handleLogOut}
            />
          }
        />
        <Route
          path="/movies"
          element={
          <ProtectedRoute
          component={Movies}
              buttonDownloadStatus={true}
              login={loggedIn}
              burgerNav={handleBurgerMenu}
              burgerNavInactive={handleBurgerMenuInactive}
              nav={nav}
              //массив всех фильмов
              movies={movies}
              //массив сохраненных пользователем фильмов
              saveMovies={saveMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
        />
      }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
            component = {SavedMovies}
              buttonDownloadStatus={false}
              login={loggedIn}
              burgerNav={handleBurgerMenu}
              burgerNavInactive={handleBurgerMenuInactive}
              nav={nav}
              //массив сохраненных пользователем фильмов
              movies={saveMovies}
              handleDeleteMovie={handleDeleteMovie}
              allDisplayMovies={true}
            />
          }
          />
                <Route path="*" element={<PageNotFound nav={nav} />} />
      </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
