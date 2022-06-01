import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./src/context/UserContext";

import LoginPage from "./src/pages/LoginPage";
import AddPanelMember from "./src/pages/AddPanelMember";
import { render } from "react-dom";
import AddPanel from "./src/pages/AddPanel";
import AddFinalMarks from "./src/pages/AddFinalMarks";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/panelmember/add" element={<AddPanelMember />} />
          <Route path="/panel/add" element={<AddPanel />} />
          <Route path="/finalMarks/add" element={<AddFinalMarks />} />
        </Routes>
      </Router>
    );
  }
}
