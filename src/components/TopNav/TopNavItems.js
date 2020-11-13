import React from 'react'
import { Link } from 'react-router-dom';

function TopNavItems (props) {
    
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li>
                        <Link to="/dashoboard">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore-feed">
                            Explore Feed
                        </Link>
                    </li>
                    <li>
                        <Link to="/create-post">
                            Create a Post
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-us">
                            About Us
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }

export default TopNavItems
