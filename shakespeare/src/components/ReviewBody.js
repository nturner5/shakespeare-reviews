import React, {Component} from 'react';

class ReviewBody extends Component {
    render() {
        return (
            <ul>
                {this.props.review.map(review => <div key={review.id}>
                    <span className="score">{review.author}</span>
                    {review.rating}
                    {review.publish_date}
                    {review.body}
                </div>)}
            </ul>
            // <h1>REVIEW BODY DISPLAYING</h1>
        );
    }
}

export default ReviewBody;