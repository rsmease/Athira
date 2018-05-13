import React from 'react';
import * as Typicon from 'react-icons/lib/ti';

import Fade from 'react-reveal/Fade';

class LeaderIndexItem extends React.Component {
    render() {
        return (
            <Fade
                left={this.props.alignment === "left"}
                right={this.props.alignment === "right"}
                cascade
            >
                <div className="leader-index-item__container">
                    <div className="leader-backdrop"></div>
                    <img className="leader-index-item__headshot" src={this.props.leader.headshot_url} alt={`${this.props.leader.name} headshot`} />
                    <div className="leader-index-item__container--text">
                        <h2 className="leader-index-item__header-2">{this.props.leader.name}</h2>
                        <h3 className="leader-index-item__header-3">{this.props.leader.description}</h3>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default LeaderIndexItem;