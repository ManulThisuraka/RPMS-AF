import React, { Component } from "react";
import axios from "axios";
import { isAuthenticated, logout } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";

export default class StaffHome extends Component {
  
  componentDidMount(){
    if(isAuthenticated() == false){
      window.location.replace("/login");
      }
  }
  
  render() {
    
    return (
      <div className="StaffHome_container">
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
          <form>
            <br></br>
            <br></br>
            <br></br>
            <button className="btn btn-secondary btn-lg">
              <a
                href="/supHome"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Supervisor/ Co-supervisor{" "}
              </a>
            </button>{" "}
            <br></br>
            <br></br>
            <br></br>
            <button className="btn btn-secondary btn-lg">
              <a
                href="/panelhome"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Research Panels
              </a>
            </button>{" "}
            <br></br>
            <br></br>
            <br></br>
          </form>
        </center>
      </div>
    );
  }
}
