import React, { Component } from "react";


export default class AdminHome extends Component {
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
          <h1>ADMIN DASHBOARD</h1>
          <br></br>
          <form>
            <button className="btn btn-secondary btn-lg">
              <a
                href="/admin/manageNotices"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Manage Notices{" "}
              </a>
            </button>{" "}

            <button className="btn btn-secondary btn-lg">
              <a
                href="/admin/topics"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Topics{" "}
              </a>
            </button>{" "}
          </form>

        </center>
      </div>
    );
  }
}