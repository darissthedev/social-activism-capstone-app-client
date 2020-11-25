import React from 'react'
import { NavLink } from 'react-router-dom';

function TopNavItems (props) {
    
        return (
            <div className="navlinkdiv ">
                <ul className="navlinks nav">
                    <li>
                        <NavLink to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore-feed">
                            Explore Feed
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create-post">
                            Create a Post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

export default TopNavItems
