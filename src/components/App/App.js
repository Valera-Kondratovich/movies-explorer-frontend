import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(true);
  const [nav, setNav] = useState(false);
  function handleBurgerMenu (){
    setNav(!nav)
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Main login={loggedIn} burgerNav={handleBurgerMenu} nav={nav} />}></Route>
        <Route path="/signin" element={<Login nav={nav}/>}></Route>
        <Route path="/signup" element={<Register nav={nav}/>}></Route>
        <Route path="/profile" element={<Profile login={loggedIn} burgerNav={handleBurgerMenu} nav={nav}/>}></Route>
        <Route
          path="/movies"
          element={<Movies buttonDownloadStatus={true} login={loggedIn} burgerNav={handleBurgerMenu} nav={nav}/>}
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <SavedMovies buttonDownloadStatus={false} login={loggedIn} burgerNav={handleBurgerMenu} nav={nav}/>
          }
        ></Route>
        <Route path="*" element={<PageNotFound nav={nav}/>} />
      </Routes>
    </>
  );
}

export default App;
