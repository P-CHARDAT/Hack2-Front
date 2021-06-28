import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div>
      <Link to="/Login">
        <button>Hello</button>
      </Link>
    </div>
  );
}

export default Accueil;
