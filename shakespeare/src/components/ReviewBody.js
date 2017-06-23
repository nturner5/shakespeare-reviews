import React, {Component} from 'react';
var moment = require('moment')

class ReviewBody extends Component {
    constructor(props) {
        super()
        this.state = {
            likes: 0
        }
    }
    addLike(idNum) {
        const id = idNum;
        console.log('Clicked')
        this.setState({[id]: 1})
        console.log(this.state)
    }
    render() {
        var formatted = moment(this.props.review.publish_date)
            .add(364, 'day')
            .format('LL')
        return (
            <ul className='review-body'>
                <div className='review-body__topBorder'></div>
                {this
                    .props
                    .review
                    .map(review => <div key={review.id}>
                        <h1 className='review-body__name'>{review.author}</h1>
                        <h1 className='review-body__date'>{formatted}</h1>
                        <div
                            className={`body-stars__${ (Math.round(review.rating * 2) / 2) % 1 !== 0
                            ? Math.floor(review.rating) + 'h'
                            : Math.round(review.rating)}`}></div>
                        <p className='review-body__body'>{review.body}</p>
                        <div className="review-body__Btn">
                            <svg
                                className="review-body__thumbIcon"
                                onClick={() => this.addLike(review.id)}
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                            </svg>
                            <div className="review-body__thumbInt">
                                {this.state[review.id]}
                            </div>
                        </div>
                    </div>)}
            </ul>
        );
    }
}

export default ReviewBody;