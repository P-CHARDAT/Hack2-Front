import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Header from "./Header/Header";
import '../styles/Gallery.css'
import Group_53 from '../images/Group_53.svg'

function Gallery() {
  const [projectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/project/infos")
      .then((resp) => resp.json())
      .then((data) => {
        setProjectInfo(data);
      });
  }, []);

  return (

    <div className="couleur-fond"  >
      <section style={{
        backgroundImage: `url(${Group_53})`,
        backgroundSize: "cover"
      }} className="background">
        <Header />
        <div className="cardInList">
          <h1 className="listTitle">Our Participants</h1>
          {projectInfo.map((info) => (
            <ProjectCard key={info.id} {...info} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
