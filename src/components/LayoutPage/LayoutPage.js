import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function LayoutPage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default LayoutPage;
