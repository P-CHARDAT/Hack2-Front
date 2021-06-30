import React, {useState} from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Accueil from "./components/Accueil";
import Category from "./components/Category/Category";
import Gallery from "./components/Gallery";
import Login from "./components/Login/Login";
import Project from "./components/Project/Project";
import HackaContext from "./contexts/HackaContext";
import ProjectVote from "./components/ProjectVote/ProjectVote";
function App(props) {
  const [projectId, setProjectId] = useState();
  const countVote = [
    {
      id: 1,
      vote: 28,
    },
    {
      id: 2,
      vote: 15,
    },
    {
      id: 3,
      vote: 2,
    },
    {
      id: 4,
      vote: 89,
    },
    {
      id: 5,
      vote: 21,
    },
    {
      id: 6,
      vote: 10,
    },
    {
      id: 7,
      vote: 4,
    },
    {
      id: 8,
      vote: 95,
    },
    {
      id: 9,
      vote: 32,
    },
  ];
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
            <Gallery projectId={projectId} setProjectId={setProjectId} />
          </Route>

          <Route
          path="/ProjectVote/:id"
          render={(props) => <ProjectVote {...countVote.find((vote) => vote.id === parseInt(props.match.params.id))} />}></Route>
        </Switch>
      </HackaContext.Provider>
    </div>
  );
}

export default App;
