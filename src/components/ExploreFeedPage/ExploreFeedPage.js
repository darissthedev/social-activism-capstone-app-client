import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import PostDetailsPage from '../PostDetails/PostDetailsPage';
import PostsApiService from '../../services/post-api-service';


//make fetch 
//save state array
//render map thru array (for each) make a list item or sections 
//can I send title, image, date, etc as props?


class ExploreFeedPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            //state updates as new posts are submitted
        }
    }
    componentDidMount(){
        fetch(PostsApiService.getAllPosts)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    posts: this.state.posts.map()
                })
            }
    }
    //fetch 
    //setup state with data
    componentWillMount(){}
    //update

    render() {
        return (
            <div>
                <div className="explore-feed-page-top-nav">
                    <TopNav />        
                </div>
                <section className="explore-feed-pag">
                    <PostDetailsPage />

                    <div className="explore-feed-page-thumbnails">
                        <img 
                            src="#" 
                            alt="" 
                            width="500" 
                            height="600" 
                            />
                        <h3>date</h3>
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
