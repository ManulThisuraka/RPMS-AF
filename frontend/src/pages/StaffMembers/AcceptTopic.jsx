import React, { Component } from "react";
import axios from "axios";

export default class AcceptTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
        co_supervisorID: "",
        status: "",
        remarks: "",
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

    const { co_supervisorID, status, remarks } = this.state;

    const data = {
        co_supervisorID: co_supervisorID,
        status: status,
        remarks: remarks,
    };

    console.log(data);

    axios.post("http://localhost:5000/topic/create", data).then((res) => {
      if (res.data.success) {
        alert("Data saved successfully !!!");
        this.navigate("/supHome");
        this.setState({
            co_supervisorID: "",
            status: "",
            remarks: "",
        });
      }
    });
  };

  navigate = (link) => {

    location.href = link;

  }

  render() {
    return (
      <div className="supervisor-container"><br></br><br></br>
        <div className="col-md-8 mt-4 mx-auto">
          <center>
            <b><h1>Accept Topic </h1></b>
          </center>
          <form className="needs-validation" noValidate>
            {/* Status */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b><label style={{ marginBottom: "5px" }}> Status </label></b>
              <input
                type="text"
                className="form-control"
                name="status"
                placeholder="Enter the status"
                value={this.state.status}
                onChange={this.handleInputChange}
              />
            </div>

            {/* co_supervisorID */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
            <b><label style={{ marginBottom: "5px" }}> Co-Supervisor Name </label></b>
              <input
                type="text"
                className="form-control"
                name="co_supervisorID"
                placeholder="Enter Co-Supervisor Name"
                value={this.state.co_supervisorID}
                onChange={this.handleInputChange}
              />
            </div>

            {/* remarks */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
            <b><label style={{ marginBottom: "5px" }}>
                {" "}
                Supervisor Comment{" "}
              </label></b>
              <input
                type="text"
                className="form-control"
                name="remarks"
                placeholder="Enter the Comments "
                value={this.state.remarks}
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
          <br/>
        </div>
      </div>
    );
  }
}
