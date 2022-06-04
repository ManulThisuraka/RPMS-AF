import React, { Component } from "react";
import axios from "axios";

export default class PanelEvaluateTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelID: "",
      status: "",
      comment: "",
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

    const { panelID, status, comment } = this.state;

    const data = {
      panelID: panelID,
      status: status,
      comment: comment,
    };

    console.log(data);

    axios.post("http://localhost:5000/panel/save", data).then((res) => {
      if (res.data.success) {
        alert("Data saved successfully !!!");
        this.setState({
          panelID: "",
          status: "",
          comment: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="PanelEvaluateTopic-container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="col-md-8 mt-4 mx-auto">
          <center>
            <b>
              <h1>Evaluate Topics </h1>
            </b>
          </center>
          <form className="needs-validation" noValidate>
            {/* Panel Status */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}> Panel Status </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="status"
                placeholder="Enter Panel Status"
                value={this.state.status}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Panel Comment */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}> Panel Comment </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="comment"
                placeholder="Enter Panel Comment"
                value={this.state.comment}
                onChange={this.handleInputChange}
              />
            </div>
            <center>
            <button
              className="btn btn-secondary"
              type="submit"
              style={{ marginTop: "20px" }}
              onClick={this.onSubmit}
            >
              &nbsp;SUBMIT
            </button></center>
          </form>
        </div>
      </div>
    );
  }
}
