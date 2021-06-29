import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Accueil from "./components/Accueil";
import Category from "./components/Category";
import Gallery from "./components/Gallery";
import Login from "./components/Login/Login";
import Project from "./components/Project/Project";
import HackaContext from "./contexts/HackaContext";
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

          <Route exact path="/Project">
            <Project />
          </Route>

          <Route exact path="/Gallery">
            <Gallery />
          </Route>
        </Switch>
      </HackaContext.Provider>
    </div>
  );
}

export default App;
