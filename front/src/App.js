import React from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Accueil from "./components/Accueil";
import Category from "./components/Category";
import Gallery from "./components/Gallery";
import Login from "./components/Login/Login";
import Project from "./components/Project/Project";
function App() {
  let history = useHistory();
  const versConnexion = () => {
    history.push("/Login");
  };
    const versAccueil = () => {
      history.push("/");
    };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Accueil versConnexion={versConnexion} />
        </Route>

        <Route path="/Login">
          <Login versAccueil={versAccueil} />
        </Route>

        <Route path="/Category">
          <Category versAccueil={versAccueil}/>
        </Route>

        <Route exact path="/Project">
          <Project versAccueil={versAccueil}/>
        </Route>

        <Route exact path="/Gallery">
          <Gallery versAccueil={versAccueil}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
