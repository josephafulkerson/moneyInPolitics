import React, { useState, useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import ContributionsContainer from "./ContributionsContainer";
import { Route, Switch } from "react-router-dom";

const Authenticated = () => {
  const [legislators, setLegislators] = useState([]);
  const [contributions, setContributions] = useState([]);
  // house an id
  const [activeLegislator, setActiveLegislator] = useState(null);

  useEffect(() => {
    fetch("/legislators")
      .then((r) => r.json())
      .then((data) => setLegislators(data));
  }, []);

  useEffect(() => {
    fetch("/contributions")
      .then((resp) => resp.json())
      .then((data) => setContributions(data));
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home
            legislators={legislators}
            setActiveLegislator={setActiveLegislator}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contributions">
          <ContributionsContainer
            contributions={contributions}
            legislators={legislators}
            activeLegislator={activeLegislator}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Authenticated;
