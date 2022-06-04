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
    };
  }
  async renderData() {

    axios.get("http://localhost:5000/staff/view").then((res) => {
      if (res.data.success) {
        const serverResponse = res.data.existingStaff.filter(d => d.userSubType === "Supervisor");
        const dropDownValue = serverResponse?.map((response) => ({
          value: response.__id,
          label: response.username,
        }));
        console.log(dropDownValue);
        this.setState({
          
          dropDownOpt: dropDownValue 
        });
      }
    });

    // console.log("API DATA",API.request.response);
    // const serverResponse = API.existingStaff;
    // const dropDownValue = serverResponse?.map((response) => ({
    //   value: response.__id,
    //   label: response.username,
    // }));
    // this.setState({
    //   dropDownOpt: dropDownValue,
    // });
  }
  onChange(event) {
    this.setState({
      id: event.value,
      name: event.label,
    });
  }
  componentDidMount() {
    this.renderData();
  }
  render() {
    return (
      <div className="App">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="custom-dropdown">
          <Select
            class="dropdown-menu"
            options={this.state.dropDownOpt}
            onChange={this.onChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}
export default SupervisorRequest;
