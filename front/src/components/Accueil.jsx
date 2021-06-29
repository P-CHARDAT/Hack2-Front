import React, { useState } from "react";
import Loading from "./Loading/Loading";
import "../styles/Accueil.css";
import Header from "./Header/Header.jsx";

function Accueil() {
  const nav = true;
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
        <Header nav={nav} />
        <section className="accueil-part1">
          <article className="accueil-quoi">quoi qui</article>
          <section className="contenair-carrous1">
            <img
              className="accueil-imageC1"
              src={require("../images/axel_a.png")}
              alt="image1"
            />
            <img
              className="accueil-imageC2"
              src={require("../images/sylvain_a.png")}
              alt="image1"
            />
            <img
              className="accueil-imageC3"
              src={require("../images/damien_a.png")}
              alt="image1"
            />
          </section>
        </section>
        <section className="accueil-part2">
          <article className="accueil-ou">quoi qui</article>
          <section className="contenair-carrous1">
            <img
              className="accueil-imageC4"
              src={require("../images/thomas_a.png")}
              alt="image1"
            />
            <img
              className="accueil-imageC5"
              src={require("../images/pierre_a.png")}
              alt="image1"
            />
            <img
              className="accueil-imageC6"
              src={require("../images/sylvain_a.png")}
              alt="image1"
            />
          </section>
        </section>
        <article className="accueil-pourquoi">quoi qui</article>
      </div>
    </div >
  );
}

export default Accueil;
