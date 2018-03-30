import React from 'react';
import * as Typicon from 'react-icons/lib/ti';

class ReviewIndexItem extends React.Component {
    render() {
        return (
            <div className={`home__reviews--item-container--${this.props.alignment}`}>
                <div></div>
                <p className="home__reviews--body">"{this.props.review.body}"</p>
                <h3 className="home__reviews--name">- {this.props.review.reviewer_name}</h3>
                <div></div>
            </div>
        );
    }
}

export default ReviewIndexItem;