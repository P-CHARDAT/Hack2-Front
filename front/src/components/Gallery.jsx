import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Header from "./Header/Header";

function Gallery() {
  const [projectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/project/infos")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjectInfo(data);
      });
  }, []);

  console.log(projectInfo);

  return (
    <section>
      <Header versAccueil={versAccueil} />
      <div className="cardInList">
        {projectInfo.map((info) => (
          <ProjectCard key={info.id} {...info} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
