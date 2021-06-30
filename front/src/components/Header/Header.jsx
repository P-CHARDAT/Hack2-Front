import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ nav }) {
  const [timersDays, setTimersDays] = useState("00");
  const [timersHours, setTimersHours] = useState("00");
  const [timersMinute, setTimersMinute] = useState("00");
  const [timersSecond, setTimersSecond] = useState("00");

  let interval = useRef();

  const starTimer = () => {
    const countdownDate = new Date("December 12, 2021 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor(
        (distance % (1000 * 60 * 24)) / (1000 * 60)
      );
      const seconde = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimersDays(day);
        setTimersHours(hours);
        setTimersMinute(minute);
        setTimersSecond(seconde);
      }
    }, 1000);
  };

  useEffect(() => {
    starTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section>
      <div className="container-logo">
        <ul className="wrapper-logo">
          <li className="logo">
            <Link to={nav ? "./Login" : "/"}>
              <img
                src={require("../../images/Logo_fiverr_blanc.png")}
                alt="logo"
              />
            </Link>
          </li>
        </ul>
        <div className="wrapper-clock">
          <p>{timersDays}d&nbsp;</p>
          <p> {timersHours}h&nbsp;</p>
          <p> {timersMinute}min&nbsp;</p>
          <p> {timersSecond}sec&nbsp;</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
