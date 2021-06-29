import React from "react";
import selectphoto from "../../images/selectpicture.png";
import './ProjectVote.css'

export default function ProjectVote() {

    const votePositive = (vote) => {
        
        vote.classList.remove("vote__delete")

        vote.classList.add("vote__positive");

    }

    const voteDelete = (vote) => {
        
        vote.classList.remove("vote__positive")

        vote.classList.add("vote__delete");

    }
 
  

  return (
    <div className="container__projectvote">
      <div className="container__project__picture">
        <img src={selectphoto} alt="test" id="img__projet" />
        {/* {file && (
          <img
            src={`http://localhost:8000/asset_link/${file.filename}`}
            alt="test"
            id="img__projet"
          />
        )} */}
      </div>
      <div id="trait"></div>
      <div className="container__infoproject">
        <div className="info__description__url"><p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="info__description__url"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>

        
      </div>
      <h2 id="donne__vote">Donne ton vote pour ce projet !!!</h2>
      <div className="container__icone">
      <i className="fas fa-check" onClick={votePositive}></i>
      <i className="fas fa-times" onClick={voteDelete}></i>
      </div>

      <div className="vote__positive">
          <p>Votre vote à été pris en compte. Merci !!!</p>
      </div>
      <div className="vote__delete">
          <p>Votre annualtion de vote à été pris en compte. Veuillez parcourir les autres projets</p>
      </div>
    </div>
  );
}
