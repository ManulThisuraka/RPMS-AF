import React, { Component } from "react";
import axios from "axios";

export default class AddPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelGroupID: "",
      panelHead: "",
      panel_researchArea: "",
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

    const { panelGroupID, panelHead, panel_researchArea } = this.state;

    const data = {
      panelGroupID: panelGroupID,
      panelHead: panelHead,
      panel_researchArea: panel_researchArea,
    };

    console.log(data);

    axios.post("http://localhost:5000/panel/save", data).then((res) => {
      if (res.data.success) {
        alert("Data saved successfully !!!");
        this.setState({
          panelGroupID: "",
          panelHead: "",
          panel_researchArea: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="panel-container"><br></br><br></br>
        <div className="col-md-8 mt-4 mx-auto">
          <center>
            <b><h1>ADD PANAL </h1></b>
          </center>
          <form className="needs-validation" noValidate>
            {/* Panel Group ID */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b><label style={{ marginBottom: "5px" }}> Panel Group ID </label></b>
              <input
                type="text"
                className="form-control"
                name="panelGroupID"
                placeholder="Enter Panel Group ID"
                value={this.state.panelGroupID}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Panel Head */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
            <b><label style={{ marginBottom: "5px" }}> Panel Head </label></b>
              <input
                type="text"
                className="form-control"
                name="panelHead"
                placeholder="Enter Panel Head"
                value={this.state.panelHead}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Panel Research Area */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
            <b><label style={{ marginBottom: "5px" }}>
                {" "}
                Panel Research Area{" "}
              </label></b>
              <input
                type="text"
                className="form-control"
                name="panel_researchArea"
                placeholder="Enter Panel Research Area "
                value={this.state.panel_researchArea}
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
              &nbsp; SAVE
            </button>
          </form>
        </div>
      </div>
    );
  }
}
