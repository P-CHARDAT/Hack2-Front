import React from "react";
import "../styles/Accueil.css";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div>
      <div className="contenair-animation">
        <div className="ecranNoir">
        </div>
        <div className="traitBlanc1"></div>
        <div className="traitBlanc3"></div>
        <div className="carre1"></div>
        <div className="carre2"></div>
        <div className="rondNoir"></div>
        <div className="traitBlanc4"></div>
        <div className="traitBlanc5"></div>
      </div>

      <Link to="/Login">
        <button>Hello</button>
      </Link>
    </div>
  );
}

export default Accueil;
