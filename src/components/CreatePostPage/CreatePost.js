import React, { Component } from 'react'
import TopNav from '../TopNav/TopNav';

class CreatePost extends Component {
    constructor(props){
        super(props)
        this.state = {
            eventDate: "",
            eventTime: "",
            eventType: "",
            eventLocation: "",
            eventVisuals: "",
            eventChants: "",
            eventDescription: "",
            formErrors: {
                eventDate: "",
                eventTime: "",
                eventLocation: "",
                eventDescription: ""
            }
        }
    }

    handleSubmit= e => {
        e.preventDefault()
    }

    handleChange= (evt) => {
        evt.preventDefault()
    }
    render() {
        return (
            <div>
                <div className="create-post-page-top-nav">
                    <TopNav />        
                </div>
                <section className='create-post-page'>
                        <div className="create-post-page-header">
                            <h2>
                                Event Details
                            </h2>
                        </div>

                    <form 
                        className='sign-up-page-form'
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-item">
                            <input 
                                type="date" 
                                onChange={this.handleChange}
                                name="event-date"
                            />
                            <input 
                                type="time"
                                onChange={this.handleChange} 
                                name="event-time"
                            />

                        </div>
                        <div className="form-item">
                            <label htmlFor='create-post-page-event-type'>
                                Event Type
                            </label>
                            <select 
                                name="event-type" 
                                id="create-post-page-event-type" 
                                required
                                onChange={this.handleChange}
                                >
                                <option value="sit-in">
                                    Sit In
                                </option>
                                <option value="silent-protest">
                                    Silent Protest
                                </option>
                                <option value="walkout">
                                    Walkout
                                </option>
                                <option value="rally">
                                    Rally
                                </option>
                                <option value="picketing">
                                    Picketing
                                </option>
                                <option value="march">
                                    March
                                </option>
                                <option value="boycott">
                                    Boycott
                                </option>
                            </select> 
                        </div>

                        <div className="form-item">
                            <label>Location</label>
                            <input 
                                type="text" 
                                name="event-location"
                                placeholder="123 East Street San Fran..." 
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-item"> 
                        {/* //not as important */}
                            <label htmlFor="create-post-page-choose-visuals">
                                Visuals
                        </label>
                            <select 
                                name="event-visuals" 
                                id="create-post-page-choose-visuals"
                                onChange={this.handleChange}
                            >
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                             </select> 
                        </div>
                        <div className="form-item"> 
                        {/* //not as important */}
                            <label htmlFor="create-post-page-choose-chants">Chants</label>
                            <select 
                                name="event-chants" 
                                id="create-post-page-choose-chants" 
                                onChange={this.handleChange}
                            >
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select> 
                        </div>
                        <div className="form-item">
                            <label htmlFor="create-post-page-description">
                                Description
                            </label>
                            <textarea 
                                id="create-post-page-description" 
                                name="event-description"
                                value="Provide event details here"
                                onChange={this.handleChange} 
                                rows="4" 
                                cols="50">
                            </textarea>
                        </div>
                        <div className="create-post-page-status"> 
                            {/* //not as important */}
                            {/* // status of verification */}
                        </div>
                        <div className='form-item'>
                            <button 
                                type="submit"
                                className="create-post-page-button"
                            >
                                Submit for Review
                             </button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default CreatePost
