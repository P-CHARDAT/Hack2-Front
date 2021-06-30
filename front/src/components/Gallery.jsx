import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import '../styles/Gallery.css';
import { gsap } from "gsap";
import Group_53 from '../images/Group_53.svg';

function Gallery() {
  const [projectInfo, setProjectInfo] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:8000/api/project/infos")
      .then((resp) => resp.json())
      .then((data) => {
        setProjectInfo(data);
      });
  }, []);

  useEffect(() => {
    const TimelineProject = gsap.timeline();

    TimelineProject.from(allRef.current, {
      y: -50,
      duration: 0.7,
      delay: 0.5,
      opacity: 0,
      ease: "power2.out",
    });
  }, []);

  return (

    <div className="couleur-fond"  >
      <section style={{
        backgroundImage: `url(${Group_53})`,
        backgroundSize: "cover"
      }} className="background" ref={allRef}>
        <Header />
        <div className="cardInList">
          <h1 className="listTitle">Our Participants</h1>
          {projectInfo.map((info) => (
            <ProjectCard key={info.id} {...info} ref={popupRef}/>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
