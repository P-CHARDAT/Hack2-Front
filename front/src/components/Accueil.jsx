import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading/Loading";
import Header from "./Header/Header";
import Logo_fiverr_blanc from "../images/Logo_fiverr_blanc.png";
import "../styles/Accueil.css";

function Accueil({ versConnexion }) {
  return (
    <div>
      <Loading />
      <div className="background-accueil">
      <Header versConnexion={versConnexion} />
        <section className="accueil-part1">
          <article className="accueil-quoi">quoi qui</article>
          <img
            className="accueil-image1"
            src={Logo_fiverr_blanc}
            alt="image1"
          />
        </section>
        <section className="accueil-part2">
          <article className="accueil-ou">quoi qui</article>
          <img
            className="accueil-image2"
            src={Logo_fiverr_blanc}
            alt="image1"
          />
        </section>
        <article className="accueil-pourquoi">quoi qui</article>
      </div>

      <Link to="/Login">
        <button>Hello</button>
      </Link>
    </div>
  );
}

export default Accueil;
