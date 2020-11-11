import React, { Component } from 'react'

class ExploreFeedPage extends Component {
    render() {
        return (
            <div>
                <section className="explore-feed-pag">
                    <div className="explore-feed-page-top-nav">
                        <img src="#" alt="" width="500" height="600" />
                        <nav>
                        {/* hamburger menu */}
                        </nav>
                    </div> 
                    {/* //or span?? */}

                    <div className="explore-feeed-page-search-bar">
                        <input type="text" placeholder="Explore the community" />
                    </div>

                    <div className="explore-feed-page-thumbnails">
                        <img src="#" alt="" width="500" height="600" />
                        <h3>date</h3>
                        <span>
                            <p>contributor:</p>
                            <p>Dariss Harris</p>
                            <img src="#" alt="" width="180" height="180" />
                        </span>
                    </div>
                </section>
            </div>
        )
    }
}

export default ExploreFeedPage
