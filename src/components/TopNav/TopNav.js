import React, { Component } from 'react'
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
                <img
                    src=""
                    alt=""
                    width="120"
                    height="80"
                />

                {this.hamburgerExpand()}
                <button onClick={() => this.setState({hamburgerOpen: !this.state.hamburgerOpen})}>
                    ☰
                </button>

                {/* if hb open is false show nothing, if tru show topnav */}
                {/* <div className="container" onClick={this.menuExpands}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div> */}
                {/* // THIS IS HAMBURGER MENU */}

                {/* <nav className="navbar">
                <ul className="navbar-"></ul>
            </nav> */}
            </>
        )
    }
}

export default TopNav
