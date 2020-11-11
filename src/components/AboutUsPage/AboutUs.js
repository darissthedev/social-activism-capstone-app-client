import React, { Component } from 'react'

class AboutUs extends Component {
    render() {
        return (
            <div>
                <section className='about-us-page'>
                    <div className="about-us-page-header">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="about-us-page-copy" >
                        <p>
                            Organic wayfarers readymade, retro swag narwhal poke wolf fixie polaroid thundercats single-origin coffee fingerstache.
                        <br />
                            Post-ironic readymade williamsburg, meditation VHS beard bespoke hashtag etsy plaid tilde chambray flexitarian humblebrag. Green juice hot chicken meh beard quinoa cliche fam truffaut organic fixie. Salvia direct trade sustainable, 90's swag banjo gastropub. Williamsburg gluten-free yr viral subway tile, pour-over put a bird on it chartreuse. Mustache messenger bag pickled pitchfork. Polaroid health goth iceland pok pok.      
                        </p>
                    </div>
                    <div className="about-us-page-button">
                        <a href="/" className="myButton">Join Today</a>
                    </div>
                    <div className="about-us-page-alt-copy" >
                        <p>
                            "Have an Account?""
                            <a href="/">Log in</a>
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutUs
