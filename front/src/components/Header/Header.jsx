import React from "react";
import "./Header.css";

function Header({ versConnexion }) {
  return (
    <section>
      <div className="container-logo">
        <ul className="wrapper-logo">
          <li className="logo" onClick={versConnexion}>
            <img
              src={require("../../images/Logo_fiverr_blanc.png")}
              alt="logo"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
