import React, { Component } from 'react'
import TopNav from '../TopNav/TopNav';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <div className="user-dashboard-page-top-nav">
                    <TopNav />        
                </div>
                <h3>Error Page Not Found</h3>
            </div>
        )
    }
}

export default ErrorPage
