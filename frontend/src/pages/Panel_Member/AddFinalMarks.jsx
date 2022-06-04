import React, { Component } from "react";
import axios from "axios";

export default class AddFinalMarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelGroupID: "",
      studentGroupID: "",
      pp_01: "",
      pp_02: "",
      final_report: "",
      finalmark: "",
      finalgrade: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      panelGroupID,
      studentGroupID,
      pp_01,
      pp_02,
      final_report,
      finalmark,
      finalgrade,
    } = this.state;

    const data = {
      panelGroupID: panelGroupID,
      studentGroupID: studentGroupID,
      pp_01: pp_01,
      pp_02: pp_02,
      final_report: final_report,
      finalmark: finalmark,
      finalgrade: finalgrade,
    };

    console.log(data);

    axios.post("http://localhost:5000/finalMarks/save", data).then((res) => {
      if (res.data.success) {
        alert("Data saved successfully !!!");
        this.navigate("/finalMarks/viewall");
        this.setState({
          panelGroupID: "",
          studentGroupID: "",
          pp_01: "",
          pp_02: "",
          final_report: "",
          finalmark: "",
          finalgrade: "",
        });
      }
    });
  };

  navigate = (link) => {
    location.href = link;
  }

  render() {
    return (
      <div className="finalMarks-container">
        <br></br>
        <br></br>
        <br></br>
        <div className="col-md-8 mt-4 mx-auto">
          <center>
            <b>
              <h1>ADD FINAL MARKS </h1>
            </b>
          </center>
          <form className="needs-validation" noValidate>
            {/* Panel Group ID */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}> Panel Group ID </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="panelGroupID"
                placeholder="Enter Panel Group ID"
                value={this.state.panelGroupID}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Student Group ID */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}>
                  {" "}
                  Student Group ID{" "}
                </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="studentGroupID"
                placeholder="Enter Student Group ID"
                value={this.state.studentGroupID}
                onChange={this.handleInputChange}
              />
            </div>

            {/* pp_01 */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}> pp_01 </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="pp_01"
                placeholder="Enter pp_01 Marks"
                value={this.state.pp_01}
                onChange={this.handleInputChange}
              />
            </div>

            {/* pp_02 */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}> pp_02 </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="pp_02"
                placeholder="Enter pp_02 Marks"
                value={this.state.pp_02}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Final Report */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}> Final Report </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="final_report"
                placeholder="Enter Final Report Marks"
                value={this.state.final_report}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Final Mark */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}> Final Mark </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="finalmark"
                placeholder="Enter Final Mark Marks"
                value={this.state.finalmark}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Final Grade */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}> Final Grade </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="finalgrade"
                placeholder="Enter Final Grade Marks"
                value={this.state.finalgrade}
                onChange={this.handleInputChange}
              />
            </div>

            <center><button
              className="btn btn-secondary"
              type="submit"
              style={{ marginTop: "20px" }}
              onClick={this.onSubmit}
            >
              &nbsp;SAVE
            </button></center>
          </form>
        </div>
      </div>
    );
  }
}
