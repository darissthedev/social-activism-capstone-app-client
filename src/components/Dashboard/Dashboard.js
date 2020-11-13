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
                        <img 
                            src="#" 
                            alt="" 
                            width="500" 
                            height="600" 
                        />
                        <p></p>
                    </div>

                    <div className="user-dashboard-page-button">
                        <a href="/" className="myButton">Details</a>
                    </div>

                </section>  
            </div>
        )
    }
}

export default Dashboard
