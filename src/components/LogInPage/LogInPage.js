import React, { Component } from 'react'

export class LogInPage extends Component {
    render() {
        return (
            <div>
                <section className='log-in-page'>
                    <div className="log-in-page-header">
                        <h1>YOUR SOCIAL COMMUNITY</h1>
                    </div>
                    <div className="log-in-page-copy">
                        <p>
                            Social Activism App with reliable and accurate information
                            from your trusted social organizations, verified content updated daily. 
                        </p>
                    </div>
                    <form className='log-in-page-form'>
                        <div className="form-item">
                            <label htmlFor="log-in-page-email">Email Address</label>
                            <input type="text" placeholder="Email Address" required id="log-in-page-email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="log-in-page-password">Password</label>
                            <input type="text" placeholder="Password" required id="log-in-page-password" />
                        </div>
                        <div className="form-item">
                            <a href="/">Forgot your password?</a>
                        </div>
                        <div className="form-item">
                            <a href="/" className="myButton">Log In</a>
                        </div>
                        <div className="form-item">
                            <p>
                                Don't have an account?
                                <a href="/">Sign Up</a>
                            </p>
                        </div>
                
                    </form>
                </section>
            </div>
        )
    }
}

export default LogInPage
