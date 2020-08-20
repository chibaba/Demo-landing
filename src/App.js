import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./Navigation/MainNavigation";
import Landing from "./compoent/landing";

import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
