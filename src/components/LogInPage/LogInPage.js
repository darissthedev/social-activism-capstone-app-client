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
            <div className="landing"></div>
            <section className="login-page container">
              <div className="page-content">
                <div className="box-1">
                  <header className="log-in-page-header">
                    <h1>
                      YOUR
                      <br />
                      SOCIAL
                      <br />
                      COMMUNITY
                    </h1>
                  </header>
                  <div className="log-in-page-copy">
                    <p>
                      Social Activism App with reliable and accurate
                      information. The first step to organizing is
                      understanding.
                      <br />
                    </p>
                  </div>
                </div>
                <form
                  className="log-in-page-form form"
                  onSubmit={this.handleSubmitJwtAuth}
                >
                  <div className="log-in-page-form-item">
                    <input
                      type="text"
                      placeholder="Email Address"
                      required
                      name="email"
                      id="log-in-page-email"
                      onChange={this.validateInput}
                    />
                  </div>
                  <div className="log-in-page-form-item">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                      id="log-in-page-password"
                      onChange={this.validateInput}
                    />
                  </div>
                  

                  <button type="submit" className="red">
                    Log In
                  </button>

                  <div className="page-small">
                    <small>
                      Don't have an account?
                      <Link to="/sign-up" className="page-link">
                        {" "}
                        Sign Up
                      </Link>
                    </small>
                  </div>
                </form>
              </div>
            </section>
          </div>
        );
    }
}

export default LogInPage
