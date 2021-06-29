import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Login.css";
import { gsap } from "gsap";

function Login() {
  // Effet d'apparition en délai de la page
  const allRef = useRef(null);
  const formRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const validateRef = useRef(null);

  useEffect(() => {
    const TimelineProject = gsap.timeline();

    TimelineProject.from(allRef.current, {
      y: -50,
      duration: 0.5,
      delay: 1,
      opacity: 0,
      ease: "power2.out",
    })
      .from(formRef.current, {
        y: -50,
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
      })
      .from(inputRef1.current, {
        y: -50,
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
      })
      .from(inputRef2.current, {
        y: -50,
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
      })
      .from(inputRef3.current, {
        y: -50,
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
      })
      .from(validateRef.current, {
        y: -50,
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
      });
  }, []);

  return (
    <div className="background" ref={allRef}>
      <Header />

      <div className="container__login" ref={formRef}>
        <input
          type="text"
          placeholder="Pseudo..."
          className="input__login"
          ref={inputRef1}
        />
        <input
          type="text"
          placeholder="Mail..."
          className="input__login"
          ref={inputRef2}
        />
        <input
          type="password"
          placeholder="Password..."
          className="input__login"
          ref={inputRef3}
        />

        <Link to="/Category">
          <button id="btn__login" ref={validateRef}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
