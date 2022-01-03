import React from "react";
import { useHistory } from "react-router-dom";

import { Nav, NavLink, NavMenu } from "./NavBarElements";

const NavBar = ({ setCurrentUser }) => {
  const history = useHistory();
  const handleLogout = () => {
    fetch("/api/logout", {
      method: "DELETE",
    }).then((r) => r.json());
    setCurrentUser(null);
    history.push("/login");
  };

  return (
    <div>
      <Nav>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/" onClick={handleLogout}>
            Logout
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default NavBar;
