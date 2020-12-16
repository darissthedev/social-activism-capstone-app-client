import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
    render() {
        return (
          <div>
            <div className="landing"></div>
            <section className="about-page container">
              <div className="page-content">
                <div className="box-1">
                  <header className="about-us-page-header">
                    <h1>
                      ABOUT
                      <br />
                      US
                    </h1>
                  </header>
                  <div className="about-us-page-copy">
                    <p>
                      Organic and independent organizations welcome. This app is
                      for those looking for more impactful ways to contribute
                      and be apart of generation-changing communites.
                      <br />
                      <br />
                      2020 has allowed many of us to reflect in ways a "normal"
                      year would maybe not have allowed. With this App, the idea
                      was simple.. Let's securely digitize the truth of what we
                      are in the streets fighting for. Let's take back what some
                      media outlets can't/won't/or don't care to properly
                      portray. This is for US by US.
                    </p>
                  </div>
                </div>
                <Link to="/sign-up">
                  <button className="red">Join Today</button>
                </Link>
                <div className="page-small">
                  <small>
                    Already have an Account?
                    <Link to="/log-in" className="page-link">
                      {" "}
                      Log in
                    </Link>
                  </small>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default AboutUs
