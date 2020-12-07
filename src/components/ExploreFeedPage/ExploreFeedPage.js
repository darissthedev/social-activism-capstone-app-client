import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import config from '../../config'
const { API_ENDPOINT } = config
// import PostDetailsPage from '../PostDetails/PostDetailsPage';
// import PostsApiService from '../../services/post-api-service';


//make fetch 
//save state array
//render map thru array (for each) make a list item or sections 
//can I send title, image, date, etc as props?


class ExploreFeedPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
            //state updates as new posts are submitted
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
   //orderById Descending
   //orderByTimeStamp Descending

   //timestamp code
   //new Date(whateverstrieng)

    // componentWillMount(){}
    //update


    //getting data by page // back burner // limit to 10 most recent 

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
                            width="670" 
                            height="455" 
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
                                    
                                    </li>
                                
                            ))}
                        </ul>
                        <span>
                            <p>contributor:</p>
                            <p>Dariss Harris</p>
                            <img 
                                src="#" 
                                alt="" 
                                width="80" 
                                height="80" 
                            />
                        </span>
                        <div className="landing-page-log-in-button">
                            <Link to="/post-details" className="myButton">View Details</Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ExploreFeedPage
