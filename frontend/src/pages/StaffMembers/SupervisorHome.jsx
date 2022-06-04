import React, { Component } from 'react';
import axios from 'axios';

export default class SupervisorHome extends Component {

    render() {
        return (
            <div className="supervisorHome_container">
               
                <center><br></br><br></br><br></br>
            <form >
            <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg active" ><a href="/staffViewAll" style={{textDecoration:'none', color:'white'}}> View Staff Details </a></button> <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg active" ><a href="/panelETopic" style={{textDecoration:'none', color:'white'}}> Evaluate Topics </a></button> <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg active"><a href="/panelEPresentation" style={{textDecoration:'none', color:'white'}}> Evaluate Document  </a></button> <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg active"><a href="/finalMarks/add" style={{textDecoration:'none', color:'white'}}> Chat Room  </a></button> 
            </form>
            </center>
            
        </div>
        )
    }
}