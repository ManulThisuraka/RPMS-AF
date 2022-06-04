import React, { Component } from "react";
import { isAuthenticated, logout } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default class StudentHome extends Component {

  componentDidMount(){
    if(isAuthenticated() == false){
      window.location.replace("/login");
      }
  }


  render() {
    return (
      <div className="StaffHome_container">
        <center>
          
          <form>
            <button className="btn btn-secondary btn-lg">
              <a href="#"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Register Student Groups{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href="#"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Request Supervisor{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href="#"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Submit Topic To Panel{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href="#"
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




















          