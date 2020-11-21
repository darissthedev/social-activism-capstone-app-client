import React, { Component } from 'react'
import TopNav from '../TopNav/TopNav';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="user-dashboard-page-top-nav">
                    <TopNav />        
                </div>
                <section className='user-dashboard-page'> 
                    <div>
                        <img 
                            src="#" 
                            alt="" 
                            width="500" 
                            height="600" 
                        />
                    </div>
                    
                    <div>
                        <p>Protest Type</p>
                        <h3>Title</h3>
                        <p>Date</p>
                        <p>Location</p>

                    </div>
                    <div>
                        <p>Contributor</p>
                        <img 
                            src="#" 
                            alt="" 
                            width="80" 
                            height="80" 
                        />
                    </div>

                    <div className="dashboard-view-details-button-div">
                        <Link to="/post-details" className="dashboard-view-details-button">View Details</Link>
                    </div>
                    <div className="dashboard-remove-button-div">
                        <Link to="/" className="dashboard-remove-button">Remove</Link>
                    </div>

                </section>  
            </div>
        )
    }
}

export default Dashboard
