import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopNavItems from './TopNavItems'



class TopNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hamburgerOpen: false
        }
    }

    // method
    hamburgerExpand = () => {
        if(this.state.hamburgerOpen === false ){
            return ""
        } else {
            return <TopNavItems />
        }
    }

    menuExpands() { }

    render() {
        return (
            <>
            
                <div className="topnav">
                    <Link to="/dashboard" className="logo">
                    <h3 className="logo">
                        YOUR
                        <br />
                        SOCIAL
                        <br />
                        COMMUNITY
                    </h3>
                    </Link>
                <div className="hamburger">
                    {this.hamburgerExpand()}
                        <button onClick={() => this.setState({hamburgerOpen: !this.state.hamburgerOpen})}>
                            {/* ☰ */}
                            
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>

                        </button>
                </div>
                
                </div>
            </>
        )
    }
}

export default TopNav
