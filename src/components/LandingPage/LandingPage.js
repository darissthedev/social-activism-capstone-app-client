import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className="landing page">
                <section className='landing-page'>
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
                            from your trusted social organizations, verified content updated daily.
                        <br />
                            Post-ironic readymade williamsburg, meditation VHS beard bespoke hashtag etsy plaid tilde chambraSocial Activism App with reliable and accurate information from your trusted social organizations, verified content updated daily.      
                        </p>
                    </div>

                    <div className="landing-page-learn-more-button">
                            <button 
                                type="button"
                                href="/about-us" 
                                className="landing-page-learn-more-button">
                                    Learn More
                            </button>
                    </div>

                    <div className="landing-page-log-in-button">
                            <button 
                                type="button"
                                href="/sign-up" 
                                className="landing-page-log-in-button">
                                    Sign Up
                            </button>
                    </div>

                    <div className="landing-page-alt-copy" >
                        <small>
                            Already have an Account?
                            <a href="/log-in" className="log-in-link"> Log In</a>
                        </small>
                    </div>

                </section>
            </div>
        )
    }
}

export default LandingPage
