import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ nav }) {
  console.log(nav);
  return (
    <section>
      <div className="container-logo">
        <ul className="wrapper-logo">
          <li className="logo" >
            <Link to={nav ? "./Login" : "/"}>
              <img
                src={require("../../images/Logo_fiverr_blanc.png")}
                alt="logo"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
