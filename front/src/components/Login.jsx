import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";

function Login({ versAccueil }) {
  return (
    <div>
      <Header versAccueil={versAccueil} />
      <div>
        <Link to="/Category">
          <button>Category</button>
        </Link>
      </div>
      ;
    </div>
  );
}

export default Login;
