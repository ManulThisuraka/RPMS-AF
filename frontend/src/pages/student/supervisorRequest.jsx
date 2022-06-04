import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
class SupervisorRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpt: [],
      id: "",
      name: "",
      groupID: "",
      supervisorID: "",
      topic: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
      id: e.value,
      name: e.label,
      
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    //const isValid = this.validate();

    // const { groupID, id, topic} =
    //   this.state;
    const data = {
      groupID: this.state.groupID,
      supervisorID: this.state.id,
      topic: this.state.topic
    }

    // let data = new FormData();
    // data.append("groupID", this.state.groupID);
    // data.append("supervisorID", this.state.id);
    // data.append("topic", this.state.topic);



    axios.post("http://localhost:5000/topic/create", data).then((res) => {
      if (res.data.success) {
        alert("Supervisor requested Successfully");
        // this.empty();
      }
    });
  };

  async renderData() {
    axios.get("http://localhost:5000/staff/view").then((res) => {
      if (res.data.success) {
        const serverResponse = res.data.existingStaff.filter(
          (d) => d.userSubType === "Supervisor"
        );
        const dropDownValue = serverResponse?.map((response) => ({
          value: response._id,
          label: response.username,
        }));
        console.log(dropDownValue);
        this.setState({
          dropDownOpt: dropDownValue,
        });
      }
    });
  }
  onChange(event) {
    this.setState({
      id: event.value,
      name: event.label,
    });
    console.log(this.state.id);
  }
  componentDidMount() {
    this.renderData();
  }
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <h2>Request Supervisor</h2>
        <form>
          <div className="form-group">
            <label>Group ID</label>
            <input
              type="text"
              className="form-control"
              id="groupID"
              placeholder="Enter Notice Category"
              name="groupID"
              value={this.state.groupID}
              onChange={this.handleInputChange}
            />

            <small className="text-danger">{this.state.enoticeCategory}</small>
          </div>

          <div className="form-group">
            <label>Your Topic Area</label>
            <input
              type="text"
              className="form-control"
              id="topic"
              placeholder="Enter Notice Header"
              name="topic"
              value={this.state.topic}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Supervisor Name</label>
            <div className="custom-dropdown">
              <Select
                class="dropdown-menu"
                options={this.state.dropDownOpt}
                onChange={this.onChange.bind(this)}
                
              />
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
          style={{ marginTop: "10px" }}
        >
          Publish
        </button>
        &nbsp;
      </div>
    );
  }
}
export default SupervisorRequest;
