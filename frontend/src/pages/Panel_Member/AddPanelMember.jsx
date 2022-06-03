import React, { Component } from "react";
import axios from "axios";

export default class AddPanelMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffID: "",
      panelmemberID: "",
      panelmemberName: "",
      p_researchArea: "",
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

    const { staffID, panelmemberID, panelmemberName, p_researchArea } = this.state;

    const data = {
      staffID: staffID,
      panelmemberID: panelmemberID,
      panelmemberName: panelmemberName,
      p_researchArea: p_researchArea,
    };

    console.log(data);

    axios.post("http://localhost:5000/panelMembers/save", data).then((res) => {
      if (res.data.success) {
        alert("Data saved successfully !!!");
        this.setState({
          staffID: "",
          panelmemberID: "",
          panelmemberName: "",
          p_researchArea: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="panelmember-container">
        <div className="col-md-8 mt-4 mx-auto">
          <center>
            <h2 className="h3 mb-3 font-weight-normal">ADD PANAL MEMBER </h2>
          </center>
          <form className="needs-validation" noValidate>
            {/* Staff ID */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> Staff ID </label>
              <input
                type="text"
                className="form-control"
                name="staffID"
                placeholder="Enter Staff ID"
                value={this.state.staffID}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Panel Member ID */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> Panel Member ID </label>
              <input
                type="text"
                className="form-control"
                name="panelmemberID"
                placeholder="Enter Panel Member ID"
                value={this.state.panelmemberID}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Panel Member Name */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>
                {" "}
                Panel Member Name{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="panelmemberName"
                placeholder="Enter Panel Member Name "
                value={this.state.panelmemberName}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Research Area */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>
                {" "}
                Research Area{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="p_researchArea"
                placeholder="Enter Research Area "
                value={this.state.p_researchArea}
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
