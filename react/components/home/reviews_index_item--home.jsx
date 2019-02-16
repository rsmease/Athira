import React from "react";
import * as Typicon from "react-icons/lib/ti";

class ReviewsIndexItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="reviews-index-item__container--home">
          <h4 className="reviews-index-item__header-4--home">
            "{this.props.review.body}"
          </h4>
          <img
            className="reviews-index-item__image--home"
            src={this.props.review.logo_url}
            alt={`${this.props.review.company} logo`}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewsIndexItem;
