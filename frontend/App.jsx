import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./src/context/UserContext";
import "./App.css";

//Student pages
import StudentLogin from "./src/pages/student/studentLogin";
import StudentRegister from "./src/pages/student/studentRegister";
import GetAllStudents from "./src/pages/admin/getAllStudents";


import AddPanelMember from "./src/pages/AddPanelMember";
import AddAssignment from "./src/pages/student/uploadFileTest";

import { render } from "react-dom";
import AddPanel from "./src/pages/AddPanel";
import AddFinalMarks from "./src/pages/AddFinalMarks";

import ManageNotices from "./src/pages/admin/ManageNotices";
import NewNoticeForm from "./src/pages/admin/NewNoticeForm";
import ViewNoticesAdmin from "./src/pages/admin/ViewNoticesAdmin";

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<StudentLogin/>}/>
          <Route path="/panelmember/add" element={<AddPanelMember/>}/>
          <Route path="/assignment/add" element={<AddAssignment/>}/>
          <Route path="/student/register" element={<StudentRegister/>}/>
          <Route path="/admin/getAll" element={<GetAllStudents/>}/>

          <Route path="/panel/add" element={<AddPanel />} />
          <Route path="/finalMarks/add" element={<AddFinalMarks />} />

          <Route path="/admin/manageNotices" element={<ManageNotices/>}/>
          <Route path="/admin/newNotice" element={<NewNoticeForm/>}/>
          <Route path="/admin/viewNotices" element={<ViewNoticesAdmin/>}/>
        </Routes>
      </Router>
    );
  }
}
