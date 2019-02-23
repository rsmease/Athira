import React from "react";
import * as Typicon from "react-icons/lib/ti";

import Fade from "react-reveal/Fade";

class LeaderIndexItem extends React.Component {
  render() {
    return (
      <div className="leader-index-item__container">
        <Fade left>
          <div
            className="leader-index-item__headshot"
            style={{
              background: `url(${
                this.props.leader.headshot_url
                }) 50% 50% no-repeat`,
              backgroundSize: "cover"
            }}
            alt={`${this.props.leader.name} headshot`}
          />
        </Fade>
        <div className="leader-index-item__container--text">
          <h2 className="leader-index-item__header-2">
            Meet {this.props.leader.name}
          </h2>
          <div
            className="leader-index-item__header-3"
            dangerouslySetInnerHTML={{ __html: this.props.leader.description }}
          />
        </div>
      </div>
    );
  }
}

export default LeaderIndexItem;
