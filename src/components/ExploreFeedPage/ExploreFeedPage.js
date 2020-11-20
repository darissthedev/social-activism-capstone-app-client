import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
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
        fetch(`http://localhost:8000/api/post/`)
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
                <section className="explore-feed-pag">
                    <div className="explore-feed-page-thumbnails">
                        <img 
                            src="/logo192.png" 
                            alt="" 
                            width="500" 
                            height="600" 
                            />
                        <ul>
                            {this.state.posts.map((post, index)=> (
                                <li key={post.event_title + index}>
                                    <h3>
                                        {post.event_title}   
                                    </h3>
                                    <p>
                                        {post.event_date}   
                                    </p>
                                    <p>
                                        {post.event_type}   
                                    </p>
                                    
                                    </li>
                                
                            ))}
                        </ul>
                        {/* // <h3>
                        //     {this.state.posts.event_title}
                        // </h3>
                        // <p>
                        //     {this.state.posts.event_date}
                        // </p>
                        // <p>
                        //     {this.state.posts.event_type}
                        // </p> */}
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
