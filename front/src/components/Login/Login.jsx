import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Login.css";

function Login({ setIsLogin }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      const body = {
        email,
        password,
      };
      axios({
        method: "POST",
        url: "http://localhost:8000/api/user/login",
        data: body,
      }).then((data) => {
        setIsLogin(true);
        history.push("/Category");
      });
    } else {
      alert("You must provide all information");
    }
  };

  return (
    <div className="background">
      <Header />

      <div className="container__login">
        <input
          type="text"
          placeholder="Pseudo..."
          className="input__login"
          />
        <input
          type="text"
          placeholder="Mail..."
          className="input__login"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
        <input
          type="password"
          placeholder="Password..."
          className="input__login"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Link to="/Category">
          <button onClick={(event) => handleSubmit(event)} id="btn__login">
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
