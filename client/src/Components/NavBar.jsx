import React from "react";
import { useHistory } from "react-router-dom";

import { NavLink } from "react-router-dom";

const NavBar = ({setCurrentUser}) => {
  const history = useHistory()
  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(r => r.json())
    setCurrentUser(null)
    history.push('/login')
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