import React from "react";
import axios from "axios";
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import UserContext from "./src/context/UserContext";
import "./App.css";

//Student pages
import StudentLogin from "./src/pages/student/studentLogin";
import StudentRegister from "./src/pages/student/studentRegister";


import AddPanelMember from "./src/pages/AddPanelMember";
import AddAssignment from "./src/pages/student/uploadFileTest";

import { render } from "react-dom";


//Staff Pages
import StaffSignup from "./src/pages/StaffMembers/StaffSignup";
import StaffDetails from "./src/pages/StaffMembers/StaffDetails";
import StaffInfo from "./src/pages/StaffMembers/StaffInfo";
import SupervisorHome from "./src/pages/StaffMembers/SupervisorHome";
import Header from "./src/pages/Common/Header";


export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<StudentLogin/>}/>
          <Route path="/panelmember/add" element={<AddPanelMember/>}/>
          <Route path="/staff/signup" element={<StaffSignup/>}/>
          <Route path="/assignment/add" element={<AddAssignment/>}/>
          <Route path="/student/register" element={<StudentRegister/>}/>
          <Route path="/staff/view/:id" element={<StaffDetails/>}></Route>
          <Route path="/staffViewAll" element={<StaffInfo/>}></Route>
          <Route path="/supHome" element={<SupervisorHome/>}></Route>
        </Routes>
      </Router>
    );
  }
}