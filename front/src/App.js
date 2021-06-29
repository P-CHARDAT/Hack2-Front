import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Accueil from "./components/Accueil";
import Category from "./components/Category/Category";
import Gallery from "./components/Gallery";
import Login from "./components/Login/Login";
import Project from "./components/Project/Project";
import HackaContext from "./contexts/HackaContext";
import ProjectVote from "./components/ProjectVote/ProjectVote";
function App() {
  return (
    <div>
      <HackaContext.Provider>
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Category">
            <Category />
          </Route>

          <Route path="/Project">
            <Project />
          </Route>

          <Route path="/Gallery">
            <Gallery />
          </Route>

          <Route path="/ProjectVote">
            <ProjectVote />
          </Route>
        </Switch>
      </HackaContext.Provider>
    </div>
  );
}

export default App;
