import React from 'react';
import * as Typicon from 'react-icons/lib/ti';
import Fade from 'react-reveal/Fade';

class ReviewsIndexItem extends React.Component {
    render() {
        return (
            <Fade bottom cascade>
                <div className="reviews-index-item__container--home">
                    <h4 className="reviews-index-item__header-4--home">
                        "{this.props.review.body}"
                </h4>
                    <h3 className="reviews-index-item__header-3--home">
                        -  {this.props.review.reviewer_name}
                    </h3>
                    <img src={this.props.review.logo_url} alt={`${this.props.review.company} logo`} />
                </div>
            </Fade>
        );
    }
}

export default ReviewsIndexItem;
