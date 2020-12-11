import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="landing"></div>
                <section className='about-page'>
                    <div className="page-content">
                        <header className="about-us-page-header">
                            <h1>ABOUT 
                                <br />
                                US
                            </h1>
                        </header>
                        <div className="about-us-page-copy" >
                            <p>
                                Organic wayfarers readymade, retro swag narwhal poke wolf fixie polaroid thundercats single-origin coffee fingerstache.
                            <br /><br />
                                Post-ironic readymade williamsburg, meditation VHS beard bespoke hashtag etsy plaid tilde chambray flexitarian humblebrag. Green juice hot chicken meh beard quinoa cliche fam truffaut organic fixie. Salvia direct trade sustainable, 90's swag banjo gastropub. Williamsburg gluten-free yr viral subway tile, pour-over put a bird on it chartreuse. Mustache messenger bag pickled pitchfork. Polaroid health goth iceland pok pok.      
                            </p>
                        </div>
                        <Link to="/sign-up">
                            <button className="red">
                                Join Today
                            </button>
                        </Link>
                        <div className="page-small" >
                            <small>
                                Already have an Account?
                                <Link to="/log-in" className="page-link"> Log in</Link>
                            </small>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutUs
