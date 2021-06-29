import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading/Loading";
import "../styles/Accueil.css";
import Header from "./Header/Header.jsx";


  function Accueil(versConnexion) {
    const nav = true;
    const [chargement, setChargement] = useState(false);
    function load(event) {
      setTimeout(function () {
        setChargement(true); // => "click"
      }, 2750);
    }
    const [timersDays, setTimersDays] = useState('00');
    const [timersHours, setTimersHours] = useState('00');
    const [timersMinute, setTimersMinute] = useState('00');
    const [timersSecond, setTimersSecond] = useState('00');
    
    let interval = useRef();
    
    const  starTimer = () => {
      const countdownDate = new Date('December 12, 2021 00:00:00').getTime()
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
    
      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minute = Math.floor(( distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
      const seconde =  Math.floor((distance % (1000 * 60 )) / 1000);
    
      if(distance < 0){
        clearInterval(interval.current)
    
      } else {
    setTimersDays(day);
    setTimersHours(hours);
    setTimersMinute(minute);
    setTimersSecond(seconde);
      }
    }, 1000)
    };
    
    
    useEffect(() => {
      starTimer();
      return () => {
        clearInterval(interval.current)
      }
    })
  return (
    <div onLoad={load} className={chargement ? "scroll" : "no-scroll"}>
      <Loading />
      <div className="background-accueil">
        <Header nav={nav} />
        <section className="accueil-part1">
          <article className="accueil-quoi">quoi qui</article>
          <img
            className="accueil-image1"
            src={require("../images/Logo_fiverr_blanc.png")}
            alt="image1"
          />
        </section>
        <section className="accueil-part2">
          <article className="accueil-ou">quoi qui</article>
          <img
            className="accueil-image2"
            src={require("../images/Logo_fiverr_blanc.png")}
            alt="image1"
          />
        </section>
        <article className="accueil-pourquoi">quoi qui</article>
        <Link to="/Login">
          <button>Hello</button>
        </Link>
      </div>
<<<<<<< HEAD

      <p>{timersDays}</p>
      <p>{timersHours}</p>
      <p>{timersMinute}</p>
      <p>{timersSecond}</p>

      <Link to="/Login">
        <button>Hello</button>
      </Link>
=======
>>>>>>> dev
    </div>
  );
}

export default Accueil;
