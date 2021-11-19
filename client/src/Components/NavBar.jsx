import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";

import { NavLink } from "react-router-dom";

const NavBar = ({ setCurrentUser }) => {
  const history = useHistory();
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => r.json());
    setCurrentUser(null);
    history.push("/login");
  };

  return (
    <div>
      <AppBar position="sticky" margin-bottom="70px">
        <Toolbar>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/logout" onClick={handleLogout}>
                Logout
              </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

// .then(res => {
//   if (res.ok) {
//     setCurrentUser(null)
//     history.push('/'
