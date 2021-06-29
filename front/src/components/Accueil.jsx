/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading/Loading";
import Header from "./Header/Header";

function Accueil() {
  return (
    <div>
      <Loading />
      <Header />

      <Link to="/Login">
        <button>Hello</button>
      </Link>
    </div>
  );
}

export default Accueil;
