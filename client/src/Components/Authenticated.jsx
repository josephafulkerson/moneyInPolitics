import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import { Route, Switch } from "react-router-dom";

const Authenticated = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default Authenticated;
