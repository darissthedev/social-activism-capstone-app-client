import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
          <div>
            <div className="landing"></div>
            <section className="landing-page container">
              <div className="page-content">
                <div className="box-1">
                  <header className="landing-page-header">
                    <h1>
                      YOUR
                      <br />
                      SOCIAL
                      <br />
                      COMMUNITY
                    </h1>
                  </header>
                  <div className="landing-page-copy">
                    <p>
                      Social Activism App with reliable and accurate information
                      from your trusted social organizations, and verified
                      content.
                      <br />
                      <br />
                      Build trust and provide a more detailed look at what peaks
                      your social interests. Learn and be apart of a
                      "greater-good" community. Follow, post and share your
                      social activism you're proud to be apart of!
                    </p>
                  </div>
                </div>

                <div className="box-2">
                  <Link to="/about-us">
                    <button className="white">Learn More</button>
                  </Link>

                  <Link to="/sign-up">
                    <button className="red">Register</button>
                  </Link>
                </div>
                <div className="box-3">
                  <div className="page-small">
                    <small>
                      Already have an Account?
                      <Link to="/log-in" className="page-link">
                        {" "}
                        Log In
                      </Link>
                    </small>
                  </div>
                </div>
                <div className="credentials">
                  <p>
                  Demo user credentials:
                  <br />
                  email: bob@fork.com
                  <br />
                  password: password123
                  </p>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default LandingPage
