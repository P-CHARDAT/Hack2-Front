/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../styles/Accueil.css";
import { Link } from "react-router-dom";
import Logo_fiverr_blanc from '../images/Logo_fiverr_blanc.png';

function Accueil() {
  return (
    <div>
      <div className="contenair-animation">
        <div className="ecranNoir1"></div>
        <div className="ecranNoir2"></div>
        <div className="traitBlanc1"></div>
        <div className="traitBlancI1"></div>
        <div className="traitBlancI2"></div>
        <div className="traitBlancI3"></div>
        <div className="traitBlanc2"></div>
        <div className="carre1"></div>
        <div className="carre2"></div>
        <div className="rondNoir">
        <img src={Logo_fiverr_blanc} className="anime-image"></img>
        </div>
        <div className="traitBlanc3"></div>
        <div className="traitBlanc4"></div>
      </div>

      <Link to="/Login">
        <button>Hello</button>
      </Link>
    </div>
  );
}

export default Accueil;
