import React, { Component } from 'react';

class Head extends Component {
    render() {
        return (
            <div>
                <h1 className="head-title">Shakespeare</h1>
                <h2></h2>
                <div className="head-avg">
                    <h1 className="head-avg__num">{Math.round(this.props.avg * 10)/10}</h1>
                        <div className={`head-stars__${(Math.round(this.props.avg * 2)/2)%1 !== 0 ? Math.round(this.props.avg) + 'h': Math.round(this.props.avg) }`}>
                        </div>
                    
                </div>
                average is {this.props.avg}
            </div>
        );
    }
}

export default Head;