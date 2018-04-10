import React from 'react';
import * as Typicon from 'react-icons/lib/ti';

class LeaderIndexItem extends React.Component {
    render() {
        return (
            <div className="leader-index-item__container">
                <img className="leader-index-item__headshot" src={this.props.leader.headshot_url} alt={`${this.props.leader.name} headshot`} />
                <div className="leader-index-item__container--text">
                    <h2 className="leader-index-item__header-2">{this.props.leader.name}</h2>
                    <h3 className="leader-index-item__header-3">{this.props.leader.description}</h3>
                </div>
            </div>
        );
    }
}

export default LeaderIndexItem;