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
import StaffHome from "./src/pages/Panel_Member/StaffHome";

import ManageNotices from "./src/pages/admin/ManageNotices";
import NewNoticeForm from "./src/pages/admin/NewNoticeForm";
import ViewNoticesAdmin from "./src/pages/admin/ViewNoticesAdmin";
import Notice from "./src/pages/admin/Notice";
import NoticeTopicForm from "./src/pages/admin/NoticeTopicForm";
import NoticeDocumentForm from "./src/pages/admin/NoticeDocumentForm";
import NoticePresentationForm from "./src/pages/admin/NoticePresentationForm";
import ViewNoticesStudent from "./src/pages/student/ViewNoticesStudent";
import ViewNoticesStaff from "./src/pages/Panel_Member/ViewNoticesStaff";


//Staff Pages
import StaffSignup from "./src/pages/StaffMembers/StaffSignup";
import StaffDetails from "./src/pages/StaffMembers/StaffDetails";
import StaffInfo from "./src/pages/StaffMembers/StaffInfo";
import SupervisorHome from "./src/pages/StaffMembers/SupervisorHome";
import Header from "./src/pages/Common/Header";
<<<<<<< HEAD
import Home from "./src/pages/Common/Home";
=======
import Footer from "./src/pages/Common/Footer";
>>>>>>> cd5b2599dfa414b585d65613b92f4d783d2b22c4


export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/staffhome" element={<StaffHome />} />

          // Panel Member
          <Route path="/panelhome" element={<PanelHome />} />
          <Route path="/panel/add" element={<AddPanel />} />  
          <Route path="/panel/viewall" element={<ViewAllPanels />} />
          <Route path="/finalMarks/add" element={<AddFinalMarks />} />
          <Route path="/finalMarks/update" element={<UpdateFinalMarks />} />
          <Route path="/panelmember/add" element={<AddPanelMember />} />
          <Route path="/edit/:id" element = { <UpdatePanelMember/>} />
          <Route path="/panelmember/viewall" element={<ViewAllPanelMembers />} />
          <Route path="/finalMarks/viewall" element={<ViewFinalMarks />} />        
          <Route path="/panelETopic" element={<PanelEvaluateTopic />} />
          <Route path="/panelEPresentation" element={<PanelEvaluatePresentation />} />

          // Student
          <Route path="/assignment/add" element={<AddAssignment />} />
          <Route path="/student/register" element={<StudentRegister />} />
          <Route path="/admin/getAllStudents" element={<GetAllStudents/>}/>
          <Route path="/staff/signup" element={<StaffSignup/>}/>
          <Route path="/assignment/add" element={<AddAssignment/>}/>
          <Route path="/student/register" element={<StudentRegister/>}/>
          <Route path="/staff/view/:id" element={<StaffDetails/>}></Route>
          <Route path="/staffViewAll" element={<StaffInfo/>}></Route>
          <Route path="/supHome" element={<SupervisorHome/>}></Route>
          

          // Admin
          <Route path="/admin/manageNotices" element={<ManageNotices/>}/>
          <Route path="/admin/newNotice" element={<NewNoticeForm/>}/>
          <Route path="/admin/viewNotices" element={<ViewNoticesAdmin/>}/>
          <Route path="/admin/Notice/:id" element={<Notice/>}/>
          <Route path="/admin/NoticeTopic/:id" element={<NoticeTopicForm/>}/>
          <Route path="/admin/NoticeDocument/:id" element={<NoticeDocumentForm/>}/>
          <Route path="/admin/NoticePresentation/:id" element={<NoticePresentationForm/>}/>
          <Route path="/student/viewNotices" element={<ViewNoticesStudent/>}/>
          <Route path="/staff/viewNotices" element={<ViewNoticesStaff/>}/>
        </Routes>
        <Footer/>
      </Router>
    );
  }
}
