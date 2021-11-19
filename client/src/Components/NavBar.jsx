import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = ({setCurrentUser}) => {

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(r => r.)
  }


  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/logout" onClick={handleLogout}>Logout</NavLink>
    </div>
  );
};

export default NavBar;


// .then(res => {
//   if (res.ok) {
//     setCurrentUser(null)
//     history.push('/'