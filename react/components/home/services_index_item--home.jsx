import React from 'react';
import * as Material from 'react-icons/lib/md';

class ServicesIndexItem extends React.Component {

    render() {
        return (
            <div className="services-index-item__container--home">
                <Material.MdRemoveCircle className="services-index-item__icon--home" />
                <h2 className="services-index-item__header-2--home">{this.props.service.name}</h2>
                <h3 className="services-index-item__header-3--home">{this.props.service.description}</h3>
            </div>
        );
    }
}

export default ServicesIndexItem;