import React, { Component } from 'react';
import axios from 'axios';

export default class StaffHome extends Component {

    render() {
        return (
            <div className="StaffHome_container">
                
                <center><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <form>
            <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg" ><a href="/supHome" style={{textDecoration:'none', color:'white'}}> Supervisor/ Co-supervisor </a></button> <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg" ><a href="/panelhome" style={{textDecoration:'none', color:'white'}}>  Research Panels</a></button> <br></br><br></br><br></br>
            </form>
            </center>
        </div>
        )
    }
}