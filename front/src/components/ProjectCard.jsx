import React from "react";
import { useHistory } from 'react-router-dom'
import '../styles/ProjectCard.css'

function ProjectCard({ asset_link, description, pseudo, type, url_link, id}) {


  const history = useHistory();

  const selectProjet = () => {
    window.scroll(0, 0);
    history.push('/ProjectVote/' + id);
  };
  return (
    <div className="ProjectCard" onClick={selectProjet} >
      <h2>Project shared by: {pseudo}</h2>
      <figure className="projectPicture">
      <img src={`http://localhost:8000/asset_link/${asset_link}`} alt={`${pseudo} Project`} />
        <h3>Project description:</h3>
        <figcaption>{description}</figcaption>
        <h3> Click here to view it: </h3>
         <a href={url_link}>{url_link}</a>
      </figure>
    </div>
  );
}

export default ProjectCard;
