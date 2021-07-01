import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectVote.css";
import Group_53 from "../../images/Group_53.svg";
import Header from "../Header/Header";

export default function ProjectVote({
  asset_link,
  description,
  pseudo,
  type,
  url_link,
  id,
  vote,
}) {
  const [projectVote, setProjectVote] = useState([]);

  const [state, setState] = useState(null);

  const [count, setCount] = useState(vote);

  const voteCountPositive = () => {
    setCount(count + 1);
  };

  const voteCountDelete = () => {
    setCount(count - 1);
  };

  const phrasePositveVote = () => {
    setState(1);
  };

  const phraseDeleteVote = () => {
    setState(2);
  };

  const funcVotePositive = () => {
    voteCountPositive();
    phrasePositveVote();
  };

  const funcVoteDelete = () => {
    voteCountDelete();
    phraseDeleteVote();
  };

  useEffect(() => {
    fetch(`http://localhost:8000/api/project/infosid/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjectVote(data);
      });
  }, []);

  return (
    <div className="couleur-fond">
      <div
        style={{
          backgroundImage: `url(${Group_53})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Header />
        <div className="container__projectvote">
          <div className="container__project__picture">
            <img
              src={`http://localhost:8000/asset_link/${projectVote.asset_link}`}
              alt={`${pseudo} Project`}
              id="img__projet"
            />
          </div>
          <div id="trait__vote"></div>
          <div className="container__info__desktop">
            <div className="container__infoproject">
              <h3>Vote actuelle : {count}</h3>
              <div className="info__description__url">
                <p>{projectVote.description}</p>
              </div>
              <div className="info__description__url">
                <a href={projectVote.url_link}>{projectVote.url_link}</a>
              </div>
            </div>
            <h2 id="donne__vote">Donne ton vote pour ce projet !!!</h2>
            <div className="container__icone">
              <i
                id="i__valid"
                className="fas fa-check"
                onClick={funcVotePositive}
              ></i>
              <i
                id="i__delete"
                className="fas fa-times"
                onClick={funcVoteDelete}
              ></i>
            </div>

            <div className="container__icone__vote">
              <div className={state ? "vote__positive " : "vote__icone"}>
                <p>
                  {state === 1
                    ? "Votre vote à été pris en compte. Merci !!!"
                    : "Votre annualtion de vote à été pris en compte. Veuillez parcourir les autres projets"}
                </p>
              </div>
            </div>
          </div>
          <Link to="/Gallery">
            <i id="fleche__back" class="fas fa-arrow-circle-left"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
