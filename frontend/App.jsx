import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./src/context/UserContext";
import { render } from "react-dom";

import LoginPage from "./src/pages/LoginPage";
import AddPanelMember from "./src/pages/Panel_Member/AddPanelMember";
import AddPanel from "./src/pages/Panel_Member/AddPanel";
import AddFinalMarks from "./src/pages/Panel_Member/AddFinalMarks";
import UpdateFinalMarks from "./src/pages/Panel_Member/UpdateFinalMarks";
import UpdatePanelMember from "./src/pages/Panel_Member/UpdatePanelMember";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/panelmember/add" element={<AddPanelMember />} />
          <Route path="/panel/add" element={<AddPanel />} />
          <Route path="/finalMarks/add" element={<AddFinalMarks />} />
          <Route path="/finalMarks/update" element={<UpdateFinalMarks />} />
          {/* <Route path="/panelmember/update" element={<UpdatePanelMember />} /> */}
        </Routes>
      </Router>
    );
  }
}
