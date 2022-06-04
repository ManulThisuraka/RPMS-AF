import React, { Component } from "react";
import axios from "axios";

export default class PanelEvaluatePresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    pp_Type: "",
    panel_ppmarks: "",
      panel_ppComment: "",
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

    const { pp_Type, panel_ppstatus, panel_ppComment } = this.state;

    const data = {
        pp_Type : pp_Type,
        panel_ppmarks: panel_ppmarks,
        panel_ppComment: panel_ppComment,
    };

    console.log(data);

    axios.post("http://localhost:5000/panel/save", data).then((res) => {
      if (res.data.success) {
        alert("Data saved successfully !!!");
        this.setState({
            pp_Type : "",
            panel_ppmarks: "",
            panel_ppComment: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="PanelEvaluateTopic-container">
        <div className="col-md-8 mt-4 mx-auto">
          <center>
            <h2 className="h3 mb-3 font-weight-normal">Evaluate Presentations </h2>
          </center>
          <form className="needs-validation" noValidate>

            {/* Presentation Type */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> Presentation Type </label>
              <input
                type="text"
                className="form-control"
                name="pp_Type"
                placeholder="Enter Presentation Type"
                value={this.state.pp_Type}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Panel Presentation Comment */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> Panel Presentation Comment </label>
              <input
                type="text"
                className="form-control"
                name="panelHead"
                placeholder="Enter Presentation Comment"
                value={this.state.panel_ppComment}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Presentation Mark */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> Presentation Mark </label>
              <input
                type="text"
                className="form-control"
                name="panel_ppmarks"
                placeholder="Enter Presentation Marks"
                value={this.state.panel_ppmarks}
                onChange={this.handleInputChange}
              />
            </div>

            <button
              className="btn btn-secondary"
              type="submit"
              style={{ marginTop: "20px" }}
              onClick={this.onSubmit}
            >
              <i className="far fa-check-square"></i>
              &nbsp; SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}