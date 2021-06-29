import React, { useState, useEffect, useRef } from "react";
import Loading from "./Loading/Loading";
import "../styles/Accueil.css";
import Header from "./Header/Header.jsx";
import { gsap } from "gsap";


function Accueil() {
  const nav = true;
  const [chargement, setChargement] = useState(false);
  function load(event) {
    setTimeout(function () {
      setChargement(true); // => "click"
    }, 2750);
  }

// Effet d'apparition en délai de la page
const allRef = useRef(null);
const textRef1 = useRef(null);
const imgRef1 = useRef(null);
const imgRef2 = useRef(null);
const textRef2 = useRef(null);
const textRef3 = useRef(null);


useEffect(() => {
  const TimelineProject = gsap.timeline();

  TimelineProject.from(allRef.current, {
    y: -50,
    duration: 0.5,
    delay: 3.3,
    opacity: 0,
    ease: "power2.out",
  })
  .from(textRef1.current, {
    y: -50,
    duration: 0.5,
    opacity: 0,
    ease: "power2.out",
  })
    .from(imgRef1.current, {
      y: -50,
      duration: 0.5,
      opacity: 0,
      ease: "power2.out",
    })
    .from(imgRef2.current, {
      y: -50,
      duration: 0.5,
      opacity: 0,
      ease: "power2.out",
    })
    .from(textRef2.current, {
      y: -50,
      duration: 0.5,
      opacity: 0,
      ease: "power2.out",
    })
    .from(textRef3.current, {
      y: -50,
      duration: 0.5,
      opacity: 0,
      ease: "power2.out",
    })
    
}, []);

  return (
    <div onLoad={load} className={chargement ? "scroll" : "no-scroll"}>
      <Loading />
      <div className="background-accueil" ref={allRef}>
        <Header nav={nav} />
        <section className="accueil-part1">
          <article className="accueil-quoi" ref={textRef1}>quoi qui</article>
          <section className="contenair-carrous1" ref={imgRef1}>
            <img
              className="accueil-imageC1"
              src={require("../images/axel_a.png")}
              alt="image1"
            />
            <img
              className="accueil-imageC2"
              src={require("../images/sylvain_a.png")}
              alt="image1"
            />
            <img
              className="accueil-imageC3"
              src={require("../images/damien_a.png")}
              alt="image1"
            />
          </section>
        </section>
        <section className="accueil-part2">
          <article className="accueil-ou" ref={textRef2}>quoi qui</article>
          <section className="contenair-carrous1" ref={imgRef2}>
            <img
              className="accueil-imageC4"
              src={require("../images/thomas_a.png")}
              alt="image1"
            />
            <img
              className="accueil-imageC5"
              src={require("../images/pierre2.png")}
              alt="image1"
            />
            <img
              className="accueil-imageC6"
              src={require("../images/sylvain_a.png")}
              alt="image1"
            />
          </section>
        </section>
        <article className="accueil-pourquoi" ref={textRef3}>quoi qui</article>
      </div>
    </div >
  );
}

export default Accueil;
