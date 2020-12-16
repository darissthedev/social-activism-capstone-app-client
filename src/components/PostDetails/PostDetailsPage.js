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
        console.log(res);
        this.setState({
          post: res,
          loading: false
        });
      });
  };
 

  render() {
    console.log(this.state.post);
    return (
      <div>
        <div className="user-dashboard-page-top-nav">
          <TopNav />
        </div>

        <section className="user-dashboard-page">
          <div>
            <h2>
              {this.state.post.event_title}
            </h2>
            <ul>
              
                {/* <li key={this.props.post.event_title}>
                  <h6>{this.props.post.event_type}</h6>
                  <h3>{this.props.post.event_title}</h3>
                  <h4>{this.props.post.event_date}</h4> */}
                {/* add to dashboard button */}
                {/* </li> */}
                {/* <Link></Link> */}
            
            </ul>
          </div>
          <div>
            <p>Contributor</p>
            <img src="#" alt="" width="80" height="80" />
          </div>
        </section>
      </div>
    );
  }
}

export default PostDetailsPage
