import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticated";
import NavBar from "./NavBar";

// const userResponse = {
//   id: 1,
//   username: "test",
//   password_digest:
//     "$2a$12$B8ADJumQYUQndjNkWhPmo.8P8VuzYLo8WH15I6/9NU57Ty.Y6XuSO",
// };

// const respOK = false;

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // console.log('attempting to fetch')
    // fetch("/me").then(r => console.log(r))
    // if (respOK) {
    //   setCurrentUser(userResponse);
    //   setAuthChecked(true);
    // } else {
    //   setAuthChecked(false);
    // }
  }, []);

  // console.log("vals", "loginInAs:", currentUser, authChecked);
  // if (!authChecked) {
  //   return <div></div>;
  // }
  return (
    <>
      <Router>
        <NavBar setCurrentUser={setCurrentUser}/>
        {currentUser ? <Authenticated /> : <Unauthenticated setCurrentUser={setCurrentUser} />}
      </Router>
    </>
  );
}

export default App;
