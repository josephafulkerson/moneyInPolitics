import React, { useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";

const Login = ({ setCurrentUser }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          alert(errors.error);
        });
      }
    });
  };

  return (
    <div>
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <h1 className="signupAcct">Log In</h1>
        <div className="signup">
          <TextField
            sx={{ mx: 10}}
            variant="standard"
            label="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>

          <TextField
            variant="standard"
            label="Password"
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </div>

        <Button
          id="loginBttn"
          size="small"
          variant="contained"
          type="submit"
          style={{ backgroundColor: "#008000", color: "#ffffff" }}
        >
          Log In
        </Button>
      </form>
      <br />
      <br />
      <p id="suLnk">
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
