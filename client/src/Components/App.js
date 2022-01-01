import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticated";
import NavBar from "./NavBar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./index.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["JetBrains Mono", "monospace"].join(","),
    },
  });

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthChecked(true);
        });
      } else {
        setAuthChecked(false);
      }
    });
  }, []);

 

  return (
    <div>
        <ThemeProvider theme={theme}>
          <Router>
            <NavBar setCurrentUser={setCurrentUser} />
            {currentUser ? (
              <Authenticated />
            ) : (
              <Unauthenticated setCurrentUser={setCurrentUser} />
            )}
          </Router>
        </ThemeProvider>
    </div>
  );
}

export default App;
