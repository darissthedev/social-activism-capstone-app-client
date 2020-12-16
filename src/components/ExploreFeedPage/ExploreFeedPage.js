import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import config from '../../config'
const { API_ENDPOINT } = config



class ExploreFeedPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
            
        };
    }

    componentDidMount = () => {
        fetch(`${API_ENDPOINT}/post`)
        .then(res => res.json())
         .then(res => {
             console.log(res);
             this.setState({
                 posts: res
             })
         })
    }

    formatDate = () => {}
   

    render() {
        return (
            <div>
                <div className="explore-feed-page-top-nav">
                    <TopNav />        
                </div>
                <section className="explore-feed-page">
                    <div className="explore-feed-page-thumbnails">
                        <img 
                            src="#" 
                            alt="" 
                            // width="670" 
                            // height="455" 
                            />
                        <ul>
                            {this.state.posts.map((post, index)=> (
                                <li key={post.event_title + index}>
                                    <h6>
                                        {post.event_type}   
                                    </h6>
                                    <h3>
                                        {post.event_title}   
                                    </h3>
                                    <h4>
                                        {post.event_date}   
                                    </h4>
                                    <Link to="/post-details" className="myButton">
                                            View Details
                                    </Link>
                                </li>
                                
                            ))}
                        </ul>
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default ExploreFeedPage
