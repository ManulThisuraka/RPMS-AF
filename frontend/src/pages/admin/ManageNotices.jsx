import React, { Component } from 'react'

export default class ManageNotices extends Component {
    render() {
        return (
            <div>
                <div className="admin-container">
                <center>
                    <br/>
                    <br/>
                    <h2>Manage Notices</h2>
                    <br/>
                    <br/>
                    <br/>
                    <button type="button" class="btn btn-info"><a href="/admin/newNotice" style={{textDecoration:'none',color:'white'}}>Publish New Notice</a></button>&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-info"><a href="/admin/viewNotices" style={{textDecoration:'none',color:'white'}}>View All Notices</a></button>&nbsp;&nbsp;&nbsp;
                    </center>
                </div>
            </div>
        )
    }
}