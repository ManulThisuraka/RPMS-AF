import React, { Component } from "react";
import axios from "axios";

export default class StaffHome extends Component {
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
          <br></br>
          <br></br>
          <br></br>
          <form>
            <button className="btn btn-secondary btn-lg">
              <a
                href="/supHome"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Register Student Groups{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href="/supHome"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Request Supervisor{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href="/supHome"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Submit Topic To Panel{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href="/supHome"
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



















          