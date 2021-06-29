import React from "react";
import '../styles/ProjectCard.css'

function ProjectCard({ asset_link, description, pseudo, type, url_link }) {
  return (
    <div className="ProjectCard">
      <h2>Project shared by: {pseudo}</h2>
      <figure className="projectPicture">
        <img src={asset_link} alt={`${pseudo} Project`} />
        <h3>Project description:</h3>
        <figcaption>{description}</figcaption>
        <h3> Click here to view it: </h3>
         <a href={url_link}>{url_link}</a>
      </figure>
    </div>
  );
}

export default ProjectCard;
