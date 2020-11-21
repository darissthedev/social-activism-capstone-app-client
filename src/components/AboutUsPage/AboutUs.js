import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <section className='about-us-page'>
                    <header className="about-us-page-header">
                        <h1>ABOUT 
                            <br />
                            US
                        </h1>
                    </header>
                    <div className="about-us-page-copy" >
                        <p>
                            Organic wayfarers readymade, retro swag narwhal poke wolf fixie polaroid thundercats single-origin coffee fingerstache.
                        <br />
                            Post-ironic readymade williamsburg, meditation VHS beard bespoke hashtag etsy plaid tilde chambray flexitarian humblebrag. Green juice hot chicken meh beard quinoa cliche fam truffaut organic fixie. Salvia direct trade sustainable, 90's swag banjo gastropub. Williamsburg gluten-free yr viral subway tile, pour-over put a bird on it chartreuse. Mustache messenger bag pickled pitchfork. Polaroid health goth iceland pok pok.      
                        </p>
                    </div>
                    <div className="about-us-sign-up-button-div">
                        <Link 
                            to="/sign-up" 
                            className="about-us-sign-up-button">
                                Join Today
                        </Link>
                    </div>
                    <div className="about-us-page-alt-copy" >
                        <small>
                            Already have an Account?
                            <a href="/log-in" className="about-us-link"> Log in</a>
                        </small>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutUs
