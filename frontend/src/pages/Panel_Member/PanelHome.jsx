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
            <tr>
              <td>
                <button className="btn btn-secondary btn-lg active">
                  <a
                    href="/panelmember/add"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Add Panel Member{" "}
                  </a>
                </button>
              </td>
              &nbsp; &nbsp; &nbsp; <br></br>
              <br></br>
              <br></br>
              <td>
                <button className="btn btn-secondary btn-lg active">
                  <a
                    href="/panelEPresentation"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Evaluate Presentations{" "}
                  </a>
                </button>
              </td>
            </tr>{" "}
            <br></br>
            <br></br>
            <br></br>
            <tr>
              <td>
                <button className="btn btn-secondary btn-lg active">
                  <a
                    href="/panelETopic"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Evaluate Research Topics{" "}
                  </a>
                </button>
              </td>{" "}
              &nbsp;&nbsp; &nbsp;&nbsp; <br></br>
              <br></br>
              <br></br>
              <td>
                <button className="btn btn-secondary btn-lg active">
                  <a
                    href="/finalMarks/add"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Uploard Final Marks{" "}
                  </a>
                </button>
              </td>{" "}
            </tr>
          </form>
        </center>
      </div>
    );
  }
}
