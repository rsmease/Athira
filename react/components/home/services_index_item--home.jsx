import React from 'react';
import * as Material from 'react-icons/lib/md';
import { HashLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';

class ServicesIndexItem extends React.Component {

    parseAnchor() {
        return this.props.first ? '/services' : `/services#service-${this.props.service.id}`
    }

    render() {
        return (
            <Fade bottom exit opposite>
                <HashLink
                    smooth
                    to={this.parseAnchor()}
                >
                    <div className="services-index-item__container--home">
                        <div className="services-index-item__icon-container--home">
                            <img className="services-index-item__icon--home" src={this.props.service.icon_url} />
                        </div>
                        <h3 className="services-index-item__header-2--home">{this.props.service.name}</h3>
                        <h3 className="services-index-item__header-3--home">{this.props.service.short_description}</h3>
                    </div>
                </HashLink>
            </Fade>
        );
    }
}

export default ServicesIndexItem;
