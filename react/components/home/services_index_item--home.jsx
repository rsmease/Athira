import React from 'react';
import * as Material from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class ServicesIndexItem extends React.Component {
    render() {
        return (
            <Fade bottom exit opposite>
                <div className="services-index-item__container--home">
                    <Material.MdRemoveCircle className="services-index-item__icon--home" />
                    <h3 className="services-index-item__header-2--home">{this.props.service.name}</h3>
                    <h3 className="services-index-item__header-3--home">{this.props.service.short_description}</h3>
                </div>
            </Fade>
        );
    }
}

export default ServicesIndexItem;
