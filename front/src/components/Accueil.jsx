/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading/Loading";

function Accueil() {
  return (
    <>
      <Loading />

      <Link to="/Login">
        <button>Hello</button>
      </Link>
    </>
  );
}

export default Accueil;
