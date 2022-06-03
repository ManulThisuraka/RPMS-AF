import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./src/context/UserContext";
import { render } from "react-dom";
import "./App.css";

import LoginPage from "./src/pages/student/studentLogin";
import AddPanelMember from "./src/pages/Panel_Member/AddPanelMember";
import AddPanel from "./src/pages/Panel_Member/AddPanel";
import AddFinalMarks from "./src/pages/Panel_Member/AddFinalMarks";
import UpdateFinalMarks from "./src/pages/Panel_Member/UpdateFinalMarks";
import UpdatePanelMember from "./src/pages/Panel_Member/UpdatePanelMember";


//Student pages
import StudentRegister from "./src/pages/student/studentRegister";
import GetAllStudents from "./src/pages/admin/getAllStudents";



import AddAssignment from "./src/pages/student/uploadFileTest";

import ViewAllPanels from "./src/pages/Panel_Member/ViewAllPanels";
import ViewAllPanelMembers from "./src/pages/Panel_Member/ViewAllPanelMembers";
import ViewFinalMarks from "./src/pages/Panel_Member/ViewFinalMarks";
import PanelHome from "./src/pages/Panel_Member/PanelHome";
import PanelEvaluateTopic from "./src/pages/Panel_Member/PanelEvaluateTopic";
import PanelEvaluatePresentation from "./src/pages/Panel_Member/PanelEvaluatePresentation";

import ManageNotices from "./src/pages/admin/ManageNotices";
import NewNoticeForm from "./src/pages/admin/NewNoticeForm";
import ViewNoticesAdmin from "./src/pages/admin/ViewNoticesAdmin";

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/panel/add" element={<AddPanel />} />
          <Route path="/finalMarks/add" element={<AddFinalMarks />} />
          <Route path="/finalMarks/update" element={<UpdateFinalMarks />} />

          <Route path="/edit/:id" element = { <UpdatePanelMember/>} />

          <Route path="/panelmember/add" element={<AddPanelMember />} />
          <Route path="/panel/viewall" element={<ViewAllPanels />} />
          <Route path="/panelmember/viewall" element={<ViewAllPanelMembers />} />
          <Route path="/finalMarks/viewall" element={<ViewFinalMarks />} />
          <Route path="/panelhome" element={<PanelHome />} />
          <Route path="/panelETopic" element={<PanelEvaluateTopic />} />
          <Route path="/panelEPresentation" element={<PanelEvaluatePresentation />} />

          <Route path="/assignment/add" element={<AddAssignment />} />
          <Route path="/student/register" element={<StudentRegister />} />

          <Route path="/admin/getAllStudents" element={<GetAllStudents/>}/>
          <Route path="/panelmember/add" element={<AddPanelMember/>}/>
          <Route path="/assignment/add" element={<AddAssignment/>}/>
          <Route path="/student/register" element={<StudentRegister/>}/>
          

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
