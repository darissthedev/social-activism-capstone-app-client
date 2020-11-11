import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LogInPage from './components/LogInPage/LogInPage';
import AboutUs from './components/AboutUsPage/AboutUs';
import Dashboard from './components/Dashboard/Dashboard';
import CreatePost from './components/CreatePostPage/CreatePost';
import ExploreFeedPage from './components/ExploreFeedPage/ExploreFeedPage';
import TopNav from './components/TopNav/TopNav';
import Error from './components/ErrorPage/ErrorPage';


function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <TopNav />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/sign-up" component={SignUpPage} />
              <Route path="/log-in" component={LogInPage} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/create-post" component={CreatePost} />
              <Route path="/explore-feed" component={ExploreFeedPage} />

              <Route component={Error} />
            </Switch>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App

