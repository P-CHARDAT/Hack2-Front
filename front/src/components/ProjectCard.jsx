import React from "react";
import '../styles/ProjectCard.css'

function ProjectCard({ asset_link, description, pseudo, type, url_link }) {
  return (
    <div className="ProjectCard">
      <h2>Project originator : {pseudo}</h2>
      <figure className="projectPicture">
        <img src={asset_link} alt={`${pseudo} Project`} />
        <figcaption>{description}</figcaption>
        <p>
          Project path: <a href={url_link}>{url_link}</a>
        </p>
      </figure>
    </div>
  );
}

export default ProjectCard;
