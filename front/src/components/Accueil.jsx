import React from "react";
import "../styles/Accueil.css";
import { Link } from "react-router-dom";
import Logo_fiverr_blanc from "../images/Logo_fiverr_blanc.png";

function Accueil() {
  return (
    <div className="background-accueil">
      <div className="contenair-animation">
        <div className="ecranNoir1"></div>
        <div className="ecranNoir2"></div>
        <div className="traitBlanc1"></div>
        <div className="traitBlanc2"></div>
        <div className="traitBlancI1"></div>
        <div className="traitBlancI2"></div>
        <div className="traitBlancI3"></div>
        <div className="carre1"></div>
        <div className="carre2"></div>
        <div className="rondNoir">
          <img src={Logo_fiverr_blanc} className="anime-image" alt="animeImage"></img>
        </div>
        <div className="traitBlanc3"></div>
        <div className="traitBlanc4"></div>
        <div className="traitBlancI4"></div>
        <div className="traitBlancI5"></div>
        <div className="traitBlancI6"></div>
      </div>
      <section className="accueil-part1">
        <article className="accueil-quoi">quoi qui</article>
        <img className="accueil-image1" src={Logo_fiverr_blanc} alt="image1" />
      </section>
      <section className="accueil-part2">
        <article className="accueil-ou">quoi qui</article>
        <img className="accueil-image2" src={Logo_fiverr_blanc} alt="image1" />
      </section>
      <article className="accueil-pourquoi">quoi qui</article>
      <Link to="/Login">
        <button>Hello</button>
      </Link>
    </div>
  );
}

export default Accueil;
