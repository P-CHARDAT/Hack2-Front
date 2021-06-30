import React from "react";
import '../styles/ProjectCard.css'
import Group_53 from '../images/Group_53.svg'

function ProjectCard({ asset_link, description, pseudo, type, url_link }) {
  return (

    <div className="couleur-fond"  >
      <div className="ProjectCard contain" style={{
        backgroundImage: `url(${Group_53})`
      }}>
        <h2>Project shared by: {pseudo}</h2>
        <figure className="projectPicture">
          <img src={`http://localhost:8000/asset_link/${asset_link}`} alt={`${pseudo} Project`} />
          <h3>Project description:</h3>
          <figcaption>{description}</figcaption>
          <h3> Click here to view it: </h3>
          <a href={url_link}>{url_link}</a>
        </figure>
      </div>
    </div>
  );
}

export default ProjectCard;
