import React, { Component } from 'react'

class CreatePost extends Component {
    render() {
        return (
            <div>
                <section className='create-post-page'>
                        <div>
                            <img src="#" alt="" width="500" height="600" />
                            <nav>
                            {/* hamburger menu */}
                            </nav>
                        </div> 
                            {/* //or span?? */}

                    <form>
                        <div className="form-item">
                            <h2>Event Details</h2>
                        </div>
                
                        <div className="form-item">
                            <input type="date" />
                            <input type="time" />
                            {/* //date info */}
                        </div>
                        <div className="form-item">
                            <label htmlFor='create-post-page-event-type'>Event Type</label>
                            <select name="event-type" id="create-post-page-event-type" required>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                </select> 
                        </div>
                        <div className="form-item">
                            <label>Location</label>
                            <input type="text" placeholder="123 East Street San Fran..." />
                        </div>
                        <div className="form-item"> 
                        {/* //not as important */}
                            <label htmlFor="create-post-page-choose-visuals">Visuals</label>
                            <select name="event-type" id="create-post-page-choose-visuals">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                             </select> 
                        </div>
                        <div className="form-item"> 
                        {/* //not as important */}
                            <label htmlFor="create-post-page-choose-chants">Chants</label>
                            <select name="event-type" id="create-post-page-choose-chants">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select> 
                        </div>
                        <div className="form-item">
                            <label htmlFor="create-post-page-description">Description</label>
                            <textarea id="create-post-page-description" name="post-description" rows="4" cols="50"></textarea>
                        </div>
                        <div className="create-post-page-status"> 
                            {/* //not as important */}
                            {/* // status of verification */}
                        </div>
                        <div className="create-post-page-button">
                            <a href="/" className="myButton">Submit For Review</a>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default CreatePost
