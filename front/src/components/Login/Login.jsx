import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Login.css";

function Login({ versAccueil }) {
  return (
    <div className="background">
      <Header />

      <div className="container__login">
        <input type="text" placeholder="Pseudo..." className="input__login" />
        <input type="text" placeholder="Mail..." className="input__login" />
        <input
          type="password"
          placeholder="Password..."
          className="input__login"
        />

        <Link to="/Category">
          <button id="btn__login">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Validate
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
