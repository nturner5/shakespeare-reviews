import React, {Component} from 'react';
var moment = require('moment')

class ReviewBody extends Component {
    render() {
var formatted = moment(this.props.review.publish_date).add(364, 'day').format('LL')
        return (
            <ul className='body-main'>
                {this.props.review.map(review => <div key={review.id}>
                    <span className="score">{review.author}</span>
                    {review.rating}
                    {formatted}
                    {review.body}
                </div>)}
            </ul>
            // <h1>REVIEW BODY DISPLAYING</h1>
        );
    }
}

export default ReviewBody;