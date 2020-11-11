import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className="landing page">
                <section className='landing-page'>
                    <div className="landing-page-header">
                        <h1>YOUR SOCIAL COMMUNITY</h1>
                    </div>
                    <div className="landing-page-copy" >
                        <p>
                            Social Activism App with reliable and accurate information
                            from your trusted social organizations, verified content updated daily.
                        <br />
                            Post-ironic readymade williamsburg, meditation VHS beard bespoke hashtag etsy plaid tilde chambraSocial Activism App with reliable and accurate information from your trusted social organizations, verified content updated daily.      
                        </p>
                    </div>

                    <div className="landing-page-learn-more-button">
                            <Link to="/about-us" className="myButton">Learn More</Link>
                    </div>

                    <div className="landing-page-log-in-button">
                            <Link to="/sign-up" className="myButton">Sign Up</Link>
                    </div>

                    <div className="landing-page-alt-copy" >
                        <p>
                            Already have an Account?
                            <Link to="/log-in">Log In</Link>
                        </p>
                    </div>

                </section>
            </div>
        )
    }
}

export default LandingPage
