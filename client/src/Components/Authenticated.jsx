import React, {useState, useEffect} from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import { Route, Switch } from "react-router-dom";

const Authenticated = () => {
  const [ legislators, setLegislators ] = useState([])

    useEffect(() => {
        fetch('/legislators')
        .then(r => r.json())
        .then(data => setLegislators(data))
    }, [])
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home legislators={legislators}/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default Authenticated;
