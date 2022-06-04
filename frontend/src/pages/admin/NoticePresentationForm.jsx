import React, { Component } from 'react'

export default class NoticePresentationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noticeHeader: "",
            description: "",
            downdocument: "",
            presentationType:"",
            panelID: "",
            groupID: "",
            document: null,
            epresentationType:"",
            epanelID: "",
            egroupID: "",
            edocument: ""
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
        let epresentationType = "";
        let epanelID = "";
        let egroupID = "";
        let edocument = "";

        if (!this.state.presentationType) {
            epresentationType = "Presentation Type is required !!!"
        }
        if (!this.state.panelID) {
            epanelID = "Panel ID is required !!!"
        }
        if (!this.state.groupID) {
            egroupID = "Group ID is required !!!"
        }
        if (!this.state.document) {
            edocument = "Document is required !!!"
        }
        if (epresentationType || epanelID || egroupID ||edocument) {
            this.setState({ epresentationType, epanelID, egroupID, edocument });
            return false;
        }
        return true;
    };

    

    onSubmit = (e) => {

        e.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            const { presentationType, panelID, groupID, document } = this.state;
            
            let data = new FormData();
            data.append('file',document);
            data.append('topic',panelID);
            data.append('groupID',groupID);
            data.append('presentationType',presentationType);
            

            axios.post('http://localhost:5000/presentations/add', data).then((res) => {
                if (res.data.success) {
                    alert("Presentation submitted Successfully");
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
            presentationType:"",
            panelID: "",
            groupID: "",
            document: null,
            epresentationType:"",
            epanelID: "",
            egroupID: "",
            edocument: ""
        })
        document.getElementById("file").value = "";
    }
    

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <br />
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