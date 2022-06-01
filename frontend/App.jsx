import React from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import UserContext from "./src/context/UserContext";

import LoginPage from "./src/pages/LoginPage";
import { render } from "react-dom";

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Router>
          <Route path="/user/login" exact component={LoginPage} />
        </Router>
      </BrowserRouter>
    );
  }
}


  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined,
  // });

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     let token = localStorage.getItem("auth-token");
  //     if (token === null) {
  //       localStorage.setItem("auth-token", "");
  //       token = "";
  //     }
  //     const tokenResponse = await axios.post(
  //       "http://localhost:5000/users/tokenIsValid",
  //       null,
  //       { headers: { "x-auth-token": token } }
  //     );
  //     if (tokenResponse.data) {
  //       const userRes = await axios.get("http://localhost:5000/users/", {
  //         headers: { "x-auth-token": token },
  //       });
  //       setUserData({
  //         token,
  //         user: userRes.data,
  //       });
  //     }
  //   };

  //   checkLoggedIn();
 // // }, []);