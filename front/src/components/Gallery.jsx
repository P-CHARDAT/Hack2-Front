import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

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
    <div className="cardInList">
      {projectInfo.map((info) => (
        <ProjectCard key={info.id} {...info} />
      ))}
    </div>
  );
}

export default Gallery;
