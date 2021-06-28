import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
    <Switch>
<Route exact path="/">
<Accueil />
          </Switch>

    </div>
  );
}

export default App;
