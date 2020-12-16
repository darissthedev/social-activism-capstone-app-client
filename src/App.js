// import React from 'react';
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import LogInPage from "./components/LogInPage/LogInPage";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Dashboard from "./components/Dashboard/Dashboard";
import CreatePost from "./components/CreatePostPage/CreatePost";
import PostDetailsPage from "./components/PostDetails/PostDetailsPage";
import ExploreFeedPage from "./components/ExploreFeedPage/ExploreFeedPage";
import Error from "./components/ErrorPage/ErrorPage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

//change login and dashboard thru render method once converted put state

class App extends Component {
  state = {
    loggedIn: null,
  };

  updateStateMeth = (token) => {
    this.setState({
      loggedIn: token,
    });
  };
  render() {
    return (
      <div className="App">
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/sign-up" component={SignUpPage} />
              <Route path="/log-in" component={LogInPage} />
              <Route path="/about-us" component={AboutUs} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/create-post" component={CreatePost} />
              <PrivateRoute path="/post-details" component={PostDetailsPage} />
              <PrivateRoute path="/explore-feed" component={ExploreFeedPage} />

              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
