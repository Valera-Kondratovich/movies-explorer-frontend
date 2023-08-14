import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";

import LayoutPage from "../LayoutPage/LayoutPage";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main login={loggedIn} />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/profile" element={<Profile login={loggedIn} />}></Route>
        <Route
          path="/movies"
          element={<Movies login={loggedIn} buttonDownloadStatus={true} />}
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <SavedMovies login={loggedIn} buttonDownloadStatus={false} />
          }
        ></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
