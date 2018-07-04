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
                    <div className="leader-index-item__headshot" style={{ background: `url(${this.props.leader.headshot_url}) 50% 50% no-repeat`, backgroundSize: 'cover' }} alt={`${this.props.leader.name} headshot`} />
                    <div className="leader-index-item__container--text">
                        <h2 className="leader-index-item__header-2">Meet {this.props.leader.name}</h2>
                        <div className="leader-index-item__header-3" dangerouslySetInnerHTML={
                            { __html: this.props.leader.description }
                        } />
                    </div>
                </div>
            </Fade>
        );
    }
}

export default LeaderIndexItem;
