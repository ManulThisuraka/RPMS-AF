import React, { Component } from "react";
import axios from "axios";

export default class EvaluateDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      marks: "",
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

    const { comments, marks } = this.state;

    const data = {
        
      marks: marks,
      comments: comments,
    };

    console.log(data);

    const myArray = window.location.pathname.split("/", 4);
    console.log(myArray[3]);
    let id = myArray[3];

    axios.put(`http://localhost:5000/documents/update/${id}`, data).then((res,err) => {
      if (res.data.success) {
        alert("Data Updated successfully !!!");
        this.navigate();
      }else{
        console.log(err);
      }
    });
  };

  navigate = () => {
    location.href = "/staff/documents";
}


  render() {
    return (
      <div className="PanelEvaluatePresentation-container">
        <br></br>
        <br></br>
        <div className="col-md-8 mt-4 mx-auto">
        <button
              className="btn btn-secondary"
              type="submit"
              style={{ marginTop: "20px" }}
              onClick={this.onSubmit}
            >
              &nbsp; View Uplorded Documents
            </button>
          <center>
            <b>
              <h1>Evaluate Document </h1>
            </b>
            <br></br>
          </center>
          <form className="needs-validation" noValidate>
            {/* Presentation Type */}
            {/* <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}>
                  {" "}
                  Presentation Type (PP_01 / PP_02)
                </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="pp_Type"
                placeholder="Enter Presentation Type"
                value={this.state.pp_Type}
                onChange={this.handleInputChange}
              />
            </div> */}

            {/* Panel Presentation Comment */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}>
                  {" "}
                  Document Comment{" "}
                </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="comments"
                placeholder="Enter Document Comment"
                value={this.state.comments}
                onChange={this.handleInputChange}
              />
            </div>

            {/* Presentation Mark */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <b>
                <label style={{ marginBottom: "5px" }}>
                  {" "}
                  Document Mark{" "}
                </label>
              </b>
              <input
                type="text"
                className="form-control"
                name="marks"
                placeholder="Enter Document Marks"
                value={this.state.marks}
                onChange={this.handleInputChange}
              />
            </div>

            <center><button
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
