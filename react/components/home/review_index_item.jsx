import React from 'react';
import * as Typicon from 'react-icons/lib/ti';

class ReviewIndexItem extends React.Component {
    render() {
        return (
            <div className={`home__reviews--item-container--${this.props.alignment}`}>
                <p className="home__reviews--body">{this.props.review.body}</p>
                <h3 className="home__reviews--name">{this.props.review.reviewer_name}</h3>
                <h3 className="home__reviews--description">{this.props.review.reviewer_description}</h3>
            </div>
        );
    }
}

export default ReviewIndexItem;