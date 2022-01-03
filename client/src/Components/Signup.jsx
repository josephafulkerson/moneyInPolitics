import React, { useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";

const Signup = ({ setCurrentUser }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/");
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
          alert("Invalid Credentials");
        });
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="signupAcct">Create an Account</h2>
        <div className="signup">
          <TextField
            variant="standard"
            label="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>
          <TextField
            sx={{ mx: 8 }}
            variant="standard"
            label="Password"
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <TextField
            variant="standard"
            label=" Confirm Password"
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></TextField>
        </div>
        <Button
          id="signupBttn"
          size="small"
          variant="contained"
          type="submit"
          style={{ backgroundColor: "#008000", color: "#ffffff" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signup;
