import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import "../styles/Category.css";

function Category({ versAccueil }) {
  return (
    <div>
      <Header versAccueil={versAccueil} />
      <div>
        <Link to="/Project">
          <button>Projet</button>
        </Link>
      </div>
    </div>
  );
}

export default Category;
