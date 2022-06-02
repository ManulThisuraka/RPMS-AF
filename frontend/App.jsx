import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./src/context/UserContext";
import { render } from "react-dom";

import LoginPage from "./src/pages/student/studentLogin";
import AddPanelMember from "./src/pages/Panel_Member/AddPanelMember";
import AddPanel from "./src/pages/Panel_Member/AddPanel";
import AddFinalMarks from "./src/pages/Panel_Member/AddFinalMarks";
import UpdateFinalMarks from "./src/pages/Panel_Member/UpdateFinalMarks";
import UpdatePanelMember from "./src/pages/Panel_Member/UpdatePanelMember";
import "./App.css";

//Student pages
import StudentRegister from "./src/pages/student/studentRegister";
import AddAssignment from "./src/pages/student/uploadFileTest";

import { render } from "react-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/panelmember/add" element={<AddPanelMember />} />
          <Route path="/panel/add" element={<AddPanel />} />
          <Route path="/finalMarks/add" element={<AddFinalMarks />} />
          <Route path="/finalMarks/update" element={<UpdateFinalMarks />} />
          <Route path="/panelmember/update" element={<UpdatePanelMember />} />

          <Route path="/panelmember/add" element={<AddPanelMember />} />
          <Route path="/assignment/add" element={<AddAssignment />} />
          <Route path="/student/register" element={<StudentRegister />} />
        </Routes>
      </Router>
    );
  }
}
