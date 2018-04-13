import React from 'react';
import * as Material from 'react-icons/lib/md';

class ServicesIndexItem extends React.Component {

    render() {
        return (
            <div className="services-index-item__container">
                <div className="services-index-item__container--header">
                    <Material.MdRemoveCircle className="services-index-item__icon" />
                    <h2 className="services-index-item__header-2">{this.props.service.name}</h2>
                </div>
                <h3 className="services-index-item__header-3">{this.props.service.long_description}</h3>
            </div>
        );
    }
}

export default ServicesIndexItem;