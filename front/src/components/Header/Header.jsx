import React, { useState } from "react";
import Logo_fiverr_blanc from "../../images/Logo_fiverr_blanc.png";
import "./Header.css";

function Header({ versConnexion }) {
  const [startAnim, setStartAnim] = useState(0);
  function reflectLogo() {
    setStartAnim(1);
  }
  function reflectLogoReset() {
    setStartAnim(2);
  }
  return (
    <section className="wrapper-logo">
      <div className="logo-overflow">
        <div
          className="reflect"
          style={{ animationName: `reflectTranslate${startAnim}` }}
        ></div>
        <img
          className="logo"
          alt="logo"
          src={Logo_fiverr_blanc}
          onClick={versConnexion}
          onMouseEnter={reflectLogo}
          onMouseLeave={reflectLogoReset}
        ></img>
      </div>
    </section>
  );
}

export default Header;
