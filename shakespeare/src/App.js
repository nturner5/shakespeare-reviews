import React, {Component} from 'react';
import Head from './components/Head.js';
import ReviewBody from './components/ReviewBody.js';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
var keys = require("./keys.js")
class App extends React.Component {
  state = {
    reviewContent: [],
    loading: true,
    error: null,
    errorId: null
  }

  componentDidMount() {
    const reviewContent = [];
    axios.get(`http://shakespeare.podium.co/api/reviews/`, {
      headers: {
        "authorization": keys.shakespeareKey
      }
    })
      .then(res => {
        const reviewId = res.data.data.map(obj => obj.id);
        console.log(reviewId)
        for (var i = 0; i < reviewId.length; i++) {
          axios.get(`http://shakespeare.podium.co/api/reviews/${reviewId[i]}`, {
            headers: {
              "authorization": keys.shakespeareKey
            }
          }).then(res => {
            reviewContent.push(res.data.data)
            this.setState({loading: false, error: null});
          }).catch(err => {
            // Something is wrong with review ID call. Save the error in state and re-render.
            this.setState({loading: false, errorId: err});
          });
        }
        this.setState({reviewContent, loading: false, error: null});
      })
      .catch(err => {
        // Something is wrong with review index API call. Save the error in state and re-render.
        this.setState({loading: false, error: err});
      });

  }

  renderLoading() {
    return <div>Loading Reviews...</div>;
  }

  renderError() {
    return (
      <div>
        Something went wrong: {this.state.error.message}
      </div>
    );
  }

  renderPosts() {
    const {error, reviewContent} = this.state;
    if (error) {
      return this.renderError();
    }
    return (
      <div>
        <Head review={reviewContent}/>
        <ReviewBody review={reviewContent}/>
      </div>
    );
  }

  render() {
    const {loading} = this.state;
    return (
      <div>
        {loading ? this.renderLoading(): this.renderPosts()}
      </div>
    );
  }
}

export default App;