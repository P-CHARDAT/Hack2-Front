import React, { useState } from "react";
import "../../styles/Loading.css";
import Logo_fiverr_blanc from "../../images/Logo_fiverr_blanc.png";

export default function Loading() {
  const [animation, setAnimation] = useState(false)
  function animOut(event) {
    setTimeout(function () {
      setAnimation(true) // => "click"
    }, 2750);
  }

  return (
    <div className={animation? "contenair-animation-off" : "contenair-animation" }onLoad={animOut}>
      <div className="ecranNoir1"></div>
      <div className="ecranNoir2"></div>
      <div className="traitBlanc1"></div>
      <div className="traitBlanc2"></div>
      <div className="traitBlancI1"></div>
      <div className="traitBlancI2"></div>
      <div className="traitBlancI3"></div>
      <div className="carre1"></div>
      <div className="carre2"></div>
      <div className="rondNoir">
        <img
          src={Logo_fiverr_blanc}
          alt="Logo Contest"
          className="anime-image"
        ></img>
      </div>
      <div className="traitBlanc3"></div>
      <div className="traitBlanc4"></div>
      <div className="traitBlancI4"></div>
      <div className="traitBlancI5"></div>
      <div className="traitBlancI6"></div>
    </div>
  );
}
