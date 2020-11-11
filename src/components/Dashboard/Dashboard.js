import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <section className='user-dashboard-page'>
                    <div className="user-dashboard-page-top-nav">
                        <img src="#" alt="" width="500" height="600" />
                        <nav>
                            hamburger menu
                        </nav>
                        </div> 
                    {/* //or span?? */}
                    <div>
                        <img src="#" alt="" width="500" height="600" />
                    </div>
                    <span></span>
                    <div>
                        <p>a</p>
                        <h3>a</h3>
                        <p>a</p>
                        <p>a</p>

                    </div>
                    <div>
                        <img src="#" alt="" width="500" height="600" />
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
