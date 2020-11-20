import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

export class LogInPage extends Component {

    handleSubmitJwtAuth = ev => {
           ev.preventDefault()
           this.setState({ error: null })
           const { email, password } = ev.target
        
           AuthApiService.postLogin({
             email: email.value,
             password: password.value,
           })
             .then(res => {
               email.value = ''
               password.value = ''
               TokenService.saveAuthToken(res.authToken)
               this.props.history.push('/dashboard')
             })
             .catch(res => {
               this.setState({ error: res.error })
             })
         }

    validateInput= evt => {
        evt.preventDefault()
    }
    render() {
        return (
            <div>
                <section className='log-in-page'>
                    <header className="log-in-page-header">
                        <h1>YOUR
                            <br />
                            SOCIAL
                            <br /> 
                            COMMUNITY
                        </h1>
                    </header>
                    <div className="log-in-page-copy">
                        <p>
                            Social Activism App with reliable and accurate information
                            from your trusted social organizations, verified content updated daily. 
                        </p>
                    </div>
                    <form 
                        className='log-in-page-form' 
                        onSubmit={this.handleSubmitJwtAuth}
                    >
                        <div className="form-item">
                            <label htmlFor="log-in-page-email">
                                Email Address
                            </label>
                            <input 
                                type="text" 
                                placeholder="Email Address" 
                                required 
                                name='email'
                                id="log-in-page-email" 
                                onChange={this.validateInput}
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="log-in-page-password">
                                Password
                            </label>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                required 
                                name='password'
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
