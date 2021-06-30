import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Category.css";
import { gsap } from "gsap";
import Tilt from "react-parallax-tilt";
import Group_53 from "../../images/Group_53.svg";

function Category() {
  // const [selectedCategory, setSelectedCategory] = useState('Category');
  const [catList, setCatList] = useState([]);
  const [categorie, setCategorie] = useState(true);
  const [developpement, setDeveloppement] = useState(false);
  const [design, setDesign] = useState(false);
  const [programming, setProgramming] = useState(false);

  const popupRef = useRef(null);
  const allRef = useRef(null);
  const containerRef = useRef(null);
  const selectorRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/category")
      .then((resp) => resp.json())
      .then((data) => {
        setCatList(data);
      });
  }, []);

  const handleChange = (event) => {
    if (event.target.value === "Programming & tech") {
      clickProgramming();
    } else if (event.target.value === "developpement") {
      clickDeveloppement();
    } else if (event.target.value === "Graphics & Design") {
      clickDesign();
    } else {
      clickCategorie();
    }
  };

  const clickCategorie = () => {
    setCategorie(true);
    setDeveloppement(false);
    setDesign(false);
    setProgramming(false);
  };

  const clickDeveloppement = () => {
    setCategorie(false);
    setDeveloppement(true);
    setDesign(false);
    setProgramming(false);
  };

  const clickDesign = () => {
    setCategorie(false);
    setDeveloppement(false);
    setDesign(true);
    setProgramming(false);
  };

  const clickProgramming = () => {
    setCategorie(false);
    setDeveloppement(false);
    setDesign(false);
    setProgramming(true);
  };

  useEffect(() => {
    const TimelineProject = gsap.timeline();

    TimelineProject.from(allRef.current, {
      y: -50,
      duration: 0.7,
      delay: 0.5,
      opacity: 0,
      ease: "power2.out",
    })
      .from(containerRef.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })
      .from(selectorRef.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      });
  }, []);

  useEffect(() => {
    const TimelineProject = gsap.timeline();

    TimelineProject.from(popupRef.current, {
      scale: 0,
      duration: 0.7,
      delay: 0.7,
      ease: "power2.out",
    });
  }, [handleChange]);

  return (
    <div className="couleur-fond" ref={allRef}>
      <div
        style={{
          backgroundImage: `url(${Group_53})`,
          backgroundSize: "cover",
        }}
        className="background-category"
      >
        <Header />
        <div>
          <div className="category__container" ref={containerRef}>
            <div className="container__input">
              <select
                name="categorie"
                id="select__categorie"
                onChange={handleChange}
                ref={selectorRef}
              >
                <option defaultValue={categorie}>Choose a category</option>
                {catList.map((item, index) => (
                  <option key={index} value={item.type}>
                    {item.type}
                  </option>
                ))}
              </select>
              <Tilt>
                {categorie && <div></div>}
                {developpement && (
                  <div className="container__option" ref={popupRef}>
                    <h2>Theme : Web Development</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum dolorem animi sequi, quisquam pariatur minima aperiam.
                      Odio eos rem, quasi ut eligendi cupiditate earum autem
                      voluptates iusto totam magnam doloremque.
                    </p>
                  </div>
                )}
                {design && (
                  <div className="container__option" ref={popupRef}>
                    <h2>Theme : Portrait</h2>
                    <p>
                      Check your skills on drawing portraits and share your
                      artwork with the whole community to have a place on{" "}
                      <strong>Fiverr's wall of fames</strong> !
                    </p>
                  </div>
                )}
                {programming && (
                  <div className="container__option" ref={popupRef}>
                    <h2>Theme : Create the next React application</h2>
                    <p>
                      Any React.js-based web site can candidate to obtain this
                      semestrial award on React application development.
                    </p>
                  </div>
                )}
              </Tilt>
            </div>
          </div>
        </div>
        <div className="bouton-admin">
          <p>Admin :</p>
          <Link to="/Project">
            <button>Projet</button>
          </Link>
          <Link to="/Gallery">
            <button>Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
