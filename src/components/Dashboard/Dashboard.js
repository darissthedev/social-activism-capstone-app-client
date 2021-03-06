import React, { Component } from "react";
import TopNav from "../TopNav/TopNav";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="user-dashboard-page-top-nav">
          <TopNav />
        </div>
        <section className="user-dashboard-page">
          <div className="dashboard-event">
            <div className="dashboard-header">
              <h2>Your Dashboard</h2>
            </div>
            <div className="post-image">
              <img src="site-images/ehimetalor-akhere-3.jpg" alt="" />
            </div>
            <div className="dashboard-copy">
              <h6>PEACEFUL PROTEST</h6>
              <h3>
                HANDS UP
                <br />
                {/* use p tags and style with css */}
                DON’T
                <br />
                SHOOT - BLM | SF
              </h3>
              <h4>SATURDAY, APRIL 5, 2020</h4>
              <h5>CITY HALL - DOWNTOWN</h5>
            </div>
          </div>
          <div className="button-group">
            <Link to="/post-details">
              <button className="red">View Details</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
