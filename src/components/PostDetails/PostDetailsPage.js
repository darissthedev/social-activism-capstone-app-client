import React, { Component } from 'react'
import TopNav from '../TopNav/TopNav';
import TokenService from '../../services/token-service';
import config from "../../config";

class PostDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      loading: true
    };
  }

  componentDidMount = () => {
    const { postId } = this.props.match.params;
    fetch(`${config.API_ENDPOINT}/post/${postId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          post: res,
          loading: false
        });
      });
  };
 

  render() {
    
    return (
      <div>
        <div className="user-dashboard-page-top-nav">
          <TopNav />
        </div>

        <section className="user-dashboard-page">
          <div>
            <h2>{this.state.post.event_title}</h2>

            <p>{this.state.post.event_description}</p>
            <div className="dashboard-copy">
              <h6>{this.state.post.event_type}</h6>
              <h4>{this.state.post.event_date}</h4>
              <h5>{this.state.post.event_location}</h5>
            </div>
          </div>
          
        </section>
      </div>
    );
  }
}

export default PostDetailsPage
