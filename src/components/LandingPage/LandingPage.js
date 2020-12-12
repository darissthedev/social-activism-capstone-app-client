import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="landing"></div>
                <section className='landing-page'>
                    <div className="page-content">
                    <header className="landing-page-header">
                        <h1>YOUR 
                            <br />
                            SOCIAL
                            <br /> 
                            COMMUNITY
                        </h1>
                    </header>
                    <div className="landing-page-copy" >
                        <p>
                            Social Activism App with reliable and accurate information
                            from your trusted social organizations, and verified content.
                        
                        <br /><br />
                        
                            Build trust and provid a more detailed into what moves your social interests. Learn and be apart of a "greater-good" community. Follow, post and share your social activism you're proud to be apart of!    
                        </p>
                    </div>
                    
                    <Link to="/about-us">
                        <button className="white">
                            Learn More
                        </button>
                    </Link>

                    <Link to="/sign-up">
                        <button className="red">
                            Register
                        </button>
                    </Link>
                

                    <div className="page-small" >
                        <small>
                            Already have an Account? 
                            <Link to="/log-in" className="page-link"> Log In</Link>
                        </small>
                    </div>
                    </div>


                </section>
            </div>
        )
    }
}

export default LandingPage
