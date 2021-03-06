import React, { Component } from "react";
import TopNav from "../TopNav/TopNav";
// import AuthApiService from '../../services/auth-api-service';
import TokenService from "../../services/token-service";
import PostsApiService from "../../services/post-api-service";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_date: "",
      event_time: "",
      event_type: "",
      event_location: "",
      event_visuals: "",
      event_chants: "",
      event_description: "",
      formErrors: {
        event_date: "",
        event_time: "",
        event_location: "",
        event_description: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      event_date,
      event_title,
      event_time,
      event_type,
      event_location,
      event_visuals,
      event_chants,
      event_description,
    } = e.target;
    this.setState({ error: null });
    PostsApiService.postArticle({
      event_title: event_title.value,
      event_date: event_date.value,
      event_time: event_time.value,
      event_type: event_type.value,
      event_location: event_location.value,
      event_visuals: event_visuals.value,
      event_chants: event_chants.value,
      event_description: event_description.value,
    })
      .then((user) => {
        event_title.value = "";
        event_date.value = "";
        event_time.value = "";
        event_type.value.value = "";
        event_location.value = "";
        event_visuals.value = "";
        event_chants.value = "";
        event_description.value = "";
        TokenService.saveAuthToken(user.authToken);
        this.props.history.push("/dashboard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  handleChange = (evt) => {
    evt.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="create-post-page-top-nav">
          <TopNav />
        </div>
        <section className="create-post-page container-2">
          <div className="page-content">
            <div className="create-post-page-header">
              <h2>Event Details</h2>
            </div>

            <form
              className="create-post-page-form"
              onSubmit={this.handleSubmit}
            >
              <div className="form-item">
                <input
                  type="date"
                  onChange={this.handleChange}
                  name="event_date"
                />
                </div>
                <div>
                <input
                  type="time"
                  onChange={this.handleChange}
                  name="event_time"
                />
              </div>
              <div className="form-item">
                <label htmlFor="create-post-page-event-title"></label>
                <input
                  name="event_title"
                  placeholder="Event Title"
                  id="create-post-page-event-title"
                  required
                  onChange={this.handleChange}
                  type="text"
                ></input>
              </div>
              <div className="form-item">
                <label htmlFor="create-post-page-event-type"></label>
                <select
                  name="event_type"
                  id="create-post-page-event-type"
                  required
                  onChange={this.handleChange}
                >
                  <option value="none" disabled hidden>
                    Select One...
                  </option>
                  <option value="sit-in">Sit In</option>
                  <option value="silent-protest">Silent Protest</option>
                  <option value="walkout">Walkout</option>
                  <option value="rally">Rally</option>
                  <option value="picketing">Picketing</option>
                  <option value="march">March</option>
                  <option value="boycott">Boycott</option>
                </select>
              </div>

              <div className="form-item">
                <label></label>
                <input
                  type="text"
                  name="event_location"
                  placeholder="123 East Street San Fran..."
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-item">
                <label htmlFor="create-post-page-description">
                
                </label>
                <textarea
                  id="create-post-page-description"
                  type="text"
                  placeholder="Event Description"
                  name="event_description"
                  onChange={this.handleChange}
                  rows="8"
                  cols="50"
                ></textarea>
              </div>
              
              <div className="form-item">
                <button type="submit" className="red create-submit-btn">
                  Submit for Review
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default CreatePost;
