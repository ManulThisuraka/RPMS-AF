import React, { Component } from 'react'

export default class ManageNotices extends Component {
    render() {
        return (
            <div className="StudentHome_container">
                <div>
                <center>
                <br/>
                    <br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
              
                    <br/>
                    <br/>
                    <br/>
                    <h1>MANAGE NOTICES</h1>
                    <br/>
                    <br/>
                    <br/>
                    <button type="button" class="btn btn-secondary"><a href="/admin/newNotice" style={{textDecoration:'none',color:'white'}}>Publish New Notice</a></button>&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-secondary"><a href="/admin/viewNotices" style={{textDecoration:'none',color:'white'}}>View All Notices</a></button>&nbsp;&nbsp;&nbsp;
                    </center>
                </div>
            </div>
        )
    }
}