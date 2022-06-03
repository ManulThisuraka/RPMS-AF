import React, { Component } from "react";
import axios from "axios";

export default class PanelEvaluateTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel_status: "",
      panelComment: "",
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

    const { panel_status, panelComment } = this.state;

    const data = {
        panel_status: panel_status,
        panelComment: panelComment,
    };

    console.log(data);

    axios.post("http://localhost:5000/panel/save", data).then((res) => {
      if (res.data.success) {
        alert("Data saved successfully !!!");
        this.setState({
            panel_status: "",
            panelComment: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="PanelEvaluateTopic-container">
        <div className="col-md-8 mt-4 mx-auto">
          <center>
            <h2 className="h3 mb-3 font-weight-normal">Evaluate Topics </h2>
          </center>
          <form className="needs-validation" noValidate>
            {/* Panel Status */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> Panel Status </label>
              <input
                type="text"
                className="form-control"
                name="panel_status"
                placeholder="Enter Panel Status"
                value={this.state.panel_status}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Panel Comment */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> Panel Comment </label>
              <input
                type="text"
                className="form-control"
                name="panelHead"
                placeholder="Enter Panel Comment"
                value={this.state.panel_status}
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
