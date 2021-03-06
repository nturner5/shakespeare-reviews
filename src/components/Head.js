import React, {Component} from 'react';
import '../styles/Head.css';
var PropTypes = require('prop-types')


class Head extends Component {
    render() {
        return (
            <div>
                <h1 className="head-title">Shakespeare Reviews</h1>
                <div className="head-calc">
                    <h1 className="head-avg">{Math.round(this.props.avg * 10) / 10}</h1>
                    <div
                        className={`head-stars__${ (Math.round(this.props.avg * 2) / 2) % 1 !== 0
                        ? Math.round(this.props.avg) + 'h'
                        : Math.round(this.props.avg)}`}>
                    </div>
                    <h1 className="head-total">{`${this.props.total} reviews`}</h1>
                </div>
            </div>
        );
    }
}

Head.propTypes = {
    avg: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default Head;