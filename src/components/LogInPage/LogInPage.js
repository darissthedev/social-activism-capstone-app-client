import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class LogInPage extends Component {

    handleSubmit = e => {
        e.preventDefault()
    }

    validateInput= evt => {
        evt.preventDefault()
    }
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
                    <form 
                        className='log-in-page-form' 
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-item">
                            <label htmlFor="log-in-page-email">
                                Email Address
                            </label>
                            <input 
                                type="text" 
                                placeholder="Email Address" 
                                required 
                                id="log-in-page-email" 
                                onChange={this.validateInput}
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="log-in-page-password">
                                Password
                            </label>
                            <input 
                                type="text" 
                                placeholder="Password" 
                                required 
                                id="log-in-page-password" 
                                onChange={this.validateInput}
                            />
                        </div>
                        <div className="form-item">
                            <small href="/">
                                Forgot your password?
                            </small>
                        </div>

                        <div className="form-item">
                            <button type="submit">
                                Log In
                            </button>
                            
                        </div>
                        <div className="form-item">
                            <small>
                                Don't have an account?
                                <Link to="/sign-up">Sign Up</Link>
                            </small>
                        </div>
                
                    </form>
                </section>
            </div>
        )
    }
}

export default LogInPage
