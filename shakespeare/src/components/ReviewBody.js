import React, {Component} from 'react';
var moment = require('moment')

class ReviewBody extends Component {
    render() {
var formatted = moment(this.props.review.publish_date).add(364, 'day').format('LL')
        return (
            <ul className='review-body'>
                <div className='review-body__topBorder'></div>
                {this.props.review.map(review => <div key={review.id}>
                <h1 className='review-body__name'>{review.author}</h1>
                <h1 className='review-body__date'>{formatted}</h1>
                    <p className='review-body__body'>{`${review.rating}${review.body}`}</p>
                    {/*<span className="score">{review.author}</span>*/}
                    
                    
                    
                </div>)}
            </ul>
            // <h1>REVIEW BODY DISPLAYING</h1>
        );
    }
}

export default ReviewBody;