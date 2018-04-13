import React from 'react';
import * as Typicon from 'react-icons/lib/ti';

class ReviewIndexItem extends React.Component {
    render() {
        return (
            <div className="reviews-index-item__container--home">
                <h4 className="reviews-index-item__header-4--home">
                    "{this.props.review.body}"
                </h4>
                <h3 className="reviews-index-item__header-3--home">
                    -{this.props.review.reviewer_name}
                </h3>
            </div>
        );
    }
}

export default ReviewIndexItem;