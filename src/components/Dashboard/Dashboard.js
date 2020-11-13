import React, { Component } from 'react'
import TopNav from '../TopNav/TopNav';

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

                    <div className="user-dashboard-view-details-button">
                        <a href="/post-details" className="myButton">View Details</a>
                    </div>
                    <div className="user-dashboard-remove-post-button">
                        <a href="/" className="myButton">Remove</a>
                    </div>

                </section>  
            </div>
        )
    }
}

export default Dashboard
