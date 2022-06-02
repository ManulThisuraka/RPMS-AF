import React from 'react';
import axios from 'axios';

import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import ListItemIcon from '@mui/material/ListItemIcon';
// import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
// import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
// import DateRangeIcon from '@mui/icons-material/DateRange';



export default class AddAssignment extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {            
            asgName:"",
            endDate:"",
            endTime:"",
            template:"",
            department:"",
            fileName:"Insert File",
            message:"",
            type:"",
            open:false
        }
    }
    
    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
    }

    onFileChange = (e) => {
        this.setState({
            template:e.target.files[0],
            fileName:e.target.files[0].name
        })
    }

    onChageSelected = (e) => {
        this.setState({department: e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("asgName", this.state.asgName);
        formData.append("endDate", this.state.endDate);
        formData.append("endTime", this.state.endTime);
        formData.append("department", this.state.department);
        formData.append("template", this.state.template);
        formData.append("fileName", this.state.fileName);

        await axios.post("http://localhost:5000/test/add", formData)
        .then((res)=> this.setState({
            message: res.data,
            type:"success",
            open: true
        }))
        .catch((err) => this.setState({
            message: err.message,
            type:"error",
            open: true
        }))
        .finally(() => window.location = '/Admin/ViewAssignment');
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <>
           

                <div className="AllView">
                    <h1 style={{color: 'white'}}> Add Assignment </h1>

                    <Container sx={{ 
                            backgroundColor: "black", 
                            color: "white",
                            border: '2px solid white',
                            width:"600px",
                            height:"auto"                    
                        }}>                    

                    <FormGroup sx={{marginTop: "20px"}}>
                        <ListItem sx={{backgroundColor:"whitesmoke"}} >
                        <ListItemIcon>
                            {/* <PermIdentityRoundedIcon fontSize="medium" /> */}
                        </ListItemIcon>
                        <TextField 
                            fullWidth
                            id="asgName" 
                            label="Assignment Name" 
                            variant="standard"
                            onChange={(e) => this.onChange(e)}
                            size="small" required/>
                        </ListItem>
                    </FormGroup>

                    <FormGroup sx={{marginTop: "20px"}}>
                        <ListItem sx={{backgroundColor:"whitesmoke"}} >
                        <ListItemIcon>
                            {/* <DateRangeIcon fontSize="medium" /> */}
                        </ListItemIcon>
                        <TextField 
                            fullWidth
                            type="date"
                            id="endDate" 
                            label="" 
                            variant="standard"
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                        </ListItem>
                    </FormGroup>

                    <FormGroup sx={{marginTop: "20px"}}>
                        <ListItem sx={{backgroundColor:"whitesmoke"}} >
                        <ListItemIcon>
                            {/* <AccessTimeIcon fontSize="medium" /> */}
                        </ListItemIcon>
                        <TextField 
                            fullWidth
                            type="time"
                            id="endTime" 
                            label="" 
                            variant="standard"
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                        </ListItem>
                    </FormGroup>                    

                    <FormGroup sx={{marginTop: "20px"}}>
                        <ListItem sx={{backgroundColor:"whitesmoke"}} >
                        <ListItemIcon>
                            {/* <ApartmentRoundedIcon fontSize="medium" /> */}
                        </ListItemIcon>
                        <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                        <Select  
                            fullWidth                          
                            variant="standard"
                            labelId="demo-simple-select-standard-label"
                            id="department"
                            value={this.state.department}
                            onChange={(e) => this.onChageSelected(e)}
                            lable="Department"
                            >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="SE">SE</MenuItem>
                            <MenuItem value="CS">CS</MenuItem>
                        </Select>
                        </ListItem>
                    </FormGroup>

                    <FormGroup sx={{marginTop: "20px"}}>
                        <ListItem sx={{backgroundColor:"whitesmoke", color:"black"}} >
                            <label htmlFor="icon-button-file">
                                <IconButton 
                                    color="primary"
                                    id="file" 
                                    aria-label="upload picture"
                                    component="span">
                                    {/* <UploadFileRoundedIcon />                                                                   */}
                                </IconButton>
                                    {this.state.fileName} 
                                <Input 
                                    sx={{
                                        display: 'none',
                                    }}
                                    id="icon-button-file"                                    
                                    onChange={(e) => this.onFileChange(e)}                                    
                                    type="file" />                                
                            </label>
                            </ListItem>
                        </FormGroup>

                    <Button 
                        fullWidth
                        sx={{marginTop: "20px", border:"2px solid white", marginBottom:"20px"}} 
                        variant="contained" 
                        size="small"
                        onClick={(e) => this.onSubmit(e)}
                        color="success" >
                        Submit
                    </Button>

                    </Container>

                    <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={this.state.type} sx={{ width: '100%' }}>
                            {this.state.message}
                        </Alert>
                    </Snackbar>

                </div>
            </>
        )
    }
}