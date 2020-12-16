import React, { Component } from 'react'
import TopNav from '../TopNav/TopNav';
import { Link } from "react-router-dom";
import config from "../../config";

class PostDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentDidMount = () => {
    fetch(`${config.API_ENDPOINT}/post/{postId}`) 
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          post: res,
        });
      });
  };
 
  componentDidMount() {
    const { postId } = this.props.match.params;
    console.log(postId);
  }

  render() {
    return (
      <div>
        <div className="user-dashboard-page-top-nav">
          <TopNav />
        </div>

        <section className="user-dashboard-page">
          <div>
            <ul>
              
                <li key={post.event_title + index}>
                  <h6>{post.event_type}</h6>
                  <h3>{post.event_title}</h3>
                  <h4>{post.event_date}</h4>
                {/* add to dashboard button */}
                </li>
                <Link></Link>
            
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
