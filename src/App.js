import React from 'react';
import Head from './components/Head.js';
import ReviewBody from './components/ReviewBody.js';
import axios from 'axios';
import './styles/App.css';
// module.exports = times;
var keys = require("./config.js")


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewContent: [],
      avg: 0,
      total: 0,
      loading: true,
      error: null,
      errorId: null
    }
  }
  componentDidMount() {
    let reviewContent = [];
    let avg = 0;
    let avgArr = [];
    let total = 0;
    axios
      .get(`http://shakespeare.podium.co/api/reviews/`, {
      headers: {
        "authorization": keys.shakespeareKey
      }
    })
      .then(res => {
        const reviewId = res
          .data
          .data
          .map(obj => obj.id);
        avgArr = res
          .data
          .data
          .map(obj => obj.rating)
        avg = (avgArr.reduce((prev, curr) => prev + curr)) / avgArr.length;
        total = avgArr.length;
        reviewId.map
        for (var i = 0; i < reviewId.length; i++) {
          axios.get(`http://shakespeare.podium.co/api/reviews/${reviewId[i]}`, {
            headers: {
              "authorization": keys.shakespeareKey
            }
          }).then(res => {
            reviewContent.push(res.data.data)
            this.setState({avg, total, loading: false, error: null});
          }).catch(err => {
            // Something is wrong with review ID call. Save the error in state and
            // re-render.
            this.setState({loading: false, errorId: err});
          });
        }
        this.setState({reviewContent, avg, loading: false, error: null});
      })
      .catch(err => {
        // Something is wrong with review index API call. Save the error in state and
        // re-render.
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
    const {error, reviewContent, avg, total} = this.state;
    if (error) {
      return this.renderError();
    }
    return (
      <div className="bg-main">
        <div className="content">
          <Head avg={avg} total={total}/>
          <ReviewBody review={reviewContent}/>
        </div>
      </div>
    );
  }
  render() {
    const {loading} = this.state;
    return (
      <div>
        {loading
          ? this.renderLoading()
          : this.renderPosts()}
      </div>
    );
  }
}
export default App;