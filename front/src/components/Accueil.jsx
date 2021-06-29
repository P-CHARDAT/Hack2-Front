import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading/Loading";
import "../styles/Accueil.css";
import Header from "./Header/Header.jsx";

function Accueil() {
  const [chargement, setChargement] = useState(false);
  function load(event) {
    setTimeout(function () {
      setChargement(true); // => "click"
    }, 2750);
  }
  return (
    <div onLoad={load} className={chargement ? "scroll" : "no-scroll"}>
      <Loading />
      <div className="background-accueil">
        <Header />
        <section className="accueil-part1">
          <article className="accueil-quoi">quoi qui</article>
          <img
            className="accueil-image1"
            src={require("../images/Logo_fiverr_blanc.png")}
            alt="image1"
          />
        </section>
        <section className="accueil-part2">
          <article className="accueil-ou">quoi qui</article>
          <img
            className="accueil-image2"
            src={require("../images/Logo_fiverr_blanc.png")}
            alt="image1"
          />
        </section>
        <article className="accueil-pourquoi">quoi qui</article>
        <Link to="/Login">
          <button>Hello</button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
