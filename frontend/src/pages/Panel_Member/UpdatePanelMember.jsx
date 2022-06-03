import React, { Component } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default class UpdatePanelMember extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      staffID: "",
      panelmemberID: "",
      panelmemberName: "",
      p_researchArea: "",
    };
  }  

  


//  componentDidMount(){
//   const { id } = props.match.params.id;
//   console.log(id);;
//     //console.log ("aaaaaaaaaa",this.props.match.params.id);
  
//     //  axios.get(`/panelMembers/view/${id}`).then((res) => {
//     //      if(res.data.success){
//     //          this.setState({
//     //            staffID:res.data.panelmembers.staffID, 
//     //           panelmemberID:res.data.panelmembers.panelmemberID, 
//     //            panelmemberName:res.data.panelmembers.panelmemberName, 
//     //            p_researchArea:res.data.panelmembers.p_researchArea
//     //         });
  
//     //        console.log(this.state.edit);
//     //     }
//     //  });
//  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { staffID, panelmemberID, panelmemberName, p_researchArea } =
      this.state;

    const data = {
      staffID: staffID,
      panelmemberID: panelmemberID,
      panelmemberName: panelmemberName,
      p_researchArea: p_researchArea,
    };

    console.log(data);

    axios.put(`/panelMembers/update/${id}`,data).then((res) => {
      if(res.data.success){
          alert(" updated successfully !!!")
          this.props.history.push('/home')
          this.setState ({
            staffID: "", 
            panelmemberID: "", 
            panelmemberName: "", 
            p_researchArea: ""
          })
      }
  })
}



  render() {
    return (
      <div className="panelMembers-container">
        <div className="col-md-8 mt-4 mx-auto">
          <center>
            <h2 className="h3 mb-3 font-weight-normal">UPDATE PANAL MEMBER</h2>
          </center>
          <form className="needs-validation" noValidate>
            {/* staff ID */}
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

            {/* panelmember ID */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> panelmember ID </label>
              <input
                type="text"
                className="form-control"
                name="panelmemberID"
                placeholder="Enter panelmember ID"
                value={this.state.panelmemberID}
                onChange={this.handleInputChange}
              />
            </div>

            {/* panelmember Name */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> panelmember Name </label>
              <input
                type="text"
                className="form-control"
                name="panelmemberName"
                placeholder="Enter panelmember Name "
                value={this.state.panelmemberName}
                onChange={this.handleInputChange}
              />
            </div>

            {/* panel researchArea */}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>
                {" "}
                Panel Research Area{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="panelresearchArea"
                placeholder="Enter panel Research Area "
                value={this.state.p_researchAreaF}
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
              &nbsp; UPDATE
            </button>
          </form>
        </div>
      </div>
    );
  }
}
