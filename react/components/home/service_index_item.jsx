import React from 'react';
import * as Material from 'react-icons/lib/md';

class ServiceIndexItem extends React.Component {

    render() {
        return (
            <div className="home__services--item-container">
                <Material.MdRemoveCircle className="home__services--item-icon" />
                <h2 className="home__services--item-name">{this.props.service.name}</h2>
                <p className="home__services--item-description">{this.props.service.description}</p>
            </div>
        );
    }
}

export default ServiceIndexItem;