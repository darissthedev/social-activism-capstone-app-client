import React, { Component } from 'react'

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
                            <a href="/" className="myButton">Learn More</a>
                    </div>

                    <div className="landing-page-log-in-button">
                            <a href="/" className="myButton">Log In</a>
                    </div>

                    <div className="landing-page-alt-copy" >
                        <p>
                            Don't have an Account?
                            <a href="/">Sign Up</a>
                        </p>
                    </div>

                </section>
            </div>
        )
    }
}

export default LandingPage
