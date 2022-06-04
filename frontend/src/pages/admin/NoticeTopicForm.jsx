import React, { Component } from 'react';
import axios from 'axios';

export default class NoticeTopicForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noticeHeader: "",
            description: "",
            downdocument: "",
            topic: "",
            groupID: "",
            supervisorID: "",
            co_supervisorID: "",
            document: null,
            etopic: "",
            egroupID: "",
            esupervisorID: "",
            eco_supervisorID: "",
            edocument: "",
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    validate = () => {
        let etopic = "";
        let egroupID = "";
        let esupervisorID = "";
        let eco_supervisorID = "";
        let edocument = "";


        if (!this.state.topic) {
            etopic = "Topic is required !!!"
        }
        if (!this.state.groupID) {
            egroupID = "Group ID is required !!!"
        }
        if (!this.state.supervisorID) {
            esupervisorID = "Supervisor ID is required !!!"
        }
        if (!this.state.co_supervisorID) {
            eco_supervisorID = "Co-Supervisor ID is required !!!"
        }
        if (!this.state.document) {
            edocument = "Document is required !!!"
        }
        if (etopic || egroupID || esupervisorID || eco_supervisorID || edocument) {
            this.setState({ etopic, egroupID, esupervisorID, eco_supervisorID, edocument });
            return false;
        }
        return true;
    };

    

    onSubmit = (e) => {

        e.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            const { topic, groupID, supervisorID, co_supervisorID, document } = this.state;
            
            let data = new FormData();
            data.append('file',document);
            data.append('topic',topic);
            data.append('groupID',groupID);
            data.append('supervisorID',supervisorID);
            data.append('co_supervisorID',co_supervisorID);
            

            axios.post('http://localhost:5000/topics/add', data).then((res) => {
                if (res.data.success) {
                    alert("Topic Registerd Successfully");
                    this.empty();
                }
            })
        }
    }

    componentDidMount() {
        const myArray = window.location.pathname.split("/", 4);
        console.log(myArray[3]);
        let id = myArray[3];
        axios.get(`http://localhost:5000/notices/view/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    noticeHeader: res.data.Notice.noticeHeader,
                    description: res.data.Notice.description,
                    downdocument: res.data.Notice.docURL,
                })
                
            }
        })
    }

    selectFile = (event) => {
        this.state.document = event.target.files[0];
    }


    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    empty = (e) => {
        this.setState({
            topic: "",
            groupID: "",
            supervisorID: "",
            co_supervisorID: "",
            document: null,
            etopic: "",
            egroupID: "",
            esupervisorID: "",
            eco_supervisorID: "",
            edocument: "",
        })
        document.getElementById("file").value = "";
    }

    render() {
        return (
            <div className="container">
                <h2>{this.state.noticeHeader}</h2>
                <br />
                <h4>{this.state.description}</h4>
                <br />
                <a className="btn btn-danger" onClick={() => location.href = this.state.downdocument}>Download Document</a>
                <br />
                <br />
                <form>

                    <div className="form-group">
                        <label>Topic</label>
                        <input type="text" className="form-control" id="topic" placeholder="Enter Topic"
                            name="topic"
                            value={this.state.topic}
                            onChange={this.handleInputChange} />
                        <small className="text-danger">{this.state.etopic}</small>
                    </div>

                    <div className="form-group">
                        <label>Group ID</label>
                        <input type="text" className="form-control" id="groupID" placeholder="Enter Group ID"
                            name="groupID"
                            value={this.state.groupID}
                            onChange={this.handleInputChange} />
                        <small className="text-danger">{this.state.egroupID}</small>
                    </div>

                    <div className="form-group">
                        <label>Supervisor ID</label>
                        <input type="text" className="form-control" id="supervisorID" placeholder="Enter Supervisor ID"
                            name="supervisorID"
                            value={this.state.supervisorID}
                            onChange={this.handleInputChange} />
                        <small className="text-danger">{this.state.esupervisorID}</small>
                    </div>

                    <div className="form-group">
                        <label>Co-Supervisor ID</label>
                        <input type="text" className="form-control" id="co_supervisorID" placeholder="Enter Co-Supervisor ID"
                            name="co_supervisorID"
                            value={this.state.co_supervisorID}
                            onChange={this.handleInputChange} />
                        <small className="text-danger">{this.state.eco_supervisorID}</small>
                    </div>

                    <label>Upload Document</label><br />
                    <input type="file" id="file" onChange={this.selectFile} /><br />
                    <small className="text-danger">{this.state.edocument}</small>

                </form>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit} style={{ marginTop: '10px' }}>Submit</button>
            </div>
        )
    }
}