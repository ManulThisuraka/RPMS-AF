import React, { Component } from "react";
import axios from "axios";

export default class PanelHome extends Component {
  render() {
    return (
      <div className="PanelHome_container">
        <center>
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
            
              &nbsp; &nbsp; &nbsp; <br></br>
              <br></br>
              <br></br>
            
                <button className="btn btn-secondary btn-lg active">
                  <a
                    href="/panel/presentations"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Evaluate Presentations{" "}
                  </a>
                </button>
                &nbsp;
                <button className="btn btn-secondary btn-lg active">
                  <a
                    href="/panel/Topics"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Evaluate Research Topics{" "}
                  </a>
                </button>
              
              &nbsp; 
             
                <button className="btn btn-secondary btn-lg active">
                  <a
                    href="/finalMarks/add"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Uploard Final Marks{" "}
                  </a>
                </button>
    
          </form>
        </center>
      </div>
    );
  }
}
