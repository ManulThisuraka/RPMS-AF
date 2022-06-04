import React, { Component } from "react";
import axios from "axios";

export default class StaffHome extends Component {
  render() {
    return (
      <div className="StudentHome_container">
        <center>
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
          </form>
        </center>
      </div>
    );
  }
}
