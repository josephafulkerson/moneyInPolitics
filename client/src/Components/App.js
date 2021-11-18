import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
