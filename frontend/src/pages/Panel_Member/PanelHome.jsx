import React, { Component } from 'react';
import axios from 'axios';

export default class PanelHome extends Component {

    render() {
        return (
            <div className="PanelHome_container">
                <br></br><br></br><br></br>
            <form>
            <button className="btn btn-secondary btn-lg active" ><a href="/panelmember/add" style={{textDecoration:'none', color:'white'}}> Add Panel </a></button> <br></br>
            <button className="btn btn-secondary btn-lg active" ><a href="/panelETopic" style={{textDecoration:'none', color:'white'}}> Evaluate Topics </a></button> <br></br>
            <button className="btn btn-secondary btn-lg active"><a href="/panelEPresentation" style={{textDecoration:'none', color:'white'}}> Evaluate Presentation  </a></button> <br></br>
            <button className="btn btn-secondary btn-lg active"><a href="/finalMarks/add" style={{textDecoration:'none', color:'white'}}> Uploard Final Marks  </a></button> 
            </form>
        </div>
        )
    }
}