import React from 'react';
import * as Material from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import AOS from 'aos';

class ServicesIndexItem extends React.Component {

    componentDidUpdate() {
        AOS.refresh();
    }

    render() {
        console.log("run")
        return (
            <div data-aos="fade" className="services-index-item__container--home">
                <Material.MdRemoveCircle className="services-index-item__icon--home" />
                <h3 className="services-index-item__header-2--home">{this.props.service.name}</h3>
                <h3 className="services-index-item__header-3--home">{this.props.service.short_description}</h3>
            </div>
        );
    }
}

export default ServicesIndexItem;
