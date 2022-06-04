import React, { Component } from "react";
import axios from "axios";
import { isAuthenticated, logout } from "../../helpers/auth";

export default class StaffHome extends Component {


  componentDidMount(){
    const USER = isAuthenticated();
    if(USER.userType !== "Student"){
      window.location.replace("/login");
      }
  }
  
  
  render() {
    return (
      <div className="StudentHome_container">
        <center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <form>
            <button className="btn btn-secondary btn-lg">
              <a
                href="/student/creategroup"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Register Student Groups{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href="/student/requestSupervisor"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Request Supervisor{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href="/student/viewNotices"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                View Notices{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Chat with Supervisor{" "}
              </a>
            </button>{" "}
          </form>

        </center>
      </div>
    );
  }
}

















          