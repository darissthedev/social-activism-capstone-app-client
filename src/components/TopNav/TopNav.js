import React, { Component } from 'react'



class TopNav extends Component {
    constructor(props) {
        super(props)
        this.state = {

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
                <div className="container" onClick={this.menuExpands}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                {/* // THIS IS HAMBURGER MENU */}

                {/* <nav className="navbar">
                <ul className="navbar-"></ul>
            </nav> */}
            </>
        )
    }
}

export default TopNav
