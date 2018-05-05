import React from 'react';
import * as Material from 'react-icons/lib/md';
import Fade from 'react-reveal/fade';

export class ServicesIndexItemLeft extends React.Component {

    render() {
        return (
            <Fade left>
                <div className="services-index-item__container">
                    <div className="services-index-item__container--header">
                        <Material.MdRemoveCircle className="services-index-item__icon" />
                        <h3 className="services-index-item__header-3--name">{this.props.service.name}</h3>
                    </div>
                    <h3 className="services-index-item__header-3--description">{this.props.service.long_description}</h3>
                </div>
                <div className="border-maker"></div>
            </Fade>
        );
    }
}

export class ServicesIndexItemRight extends React.Component {

    render() {
        return (
            <Fade right>
                <div className="services-index-item__container">
                    <h3 className="services-index-item__header-3--description">{this.props.service.long_description}</h3>
                    <div className="services-index-item__container--header">
                        <Material.MdRemoveCircle className="services-index-item__icon" />
                        <h3 className="services-index-item__header-3--name">{this.props.service.name}</h3>
                    </div>
                </div>
                <div className="border-maker"></div>
            </Fade>
        );
    }
}

export class ServicesIndexItemMobile extends React.Component {

    render() {
        return (
            <Fade bottom cascade>
                <div className="services-index-item__container">
                    <div className="services-index-item__container--header">
                        <Material.MdRemoveCircle className="services-index-item__icon" />
                        <h3 className="services-index-item__header-3--name">{this.props.service.name}</h3>
                    </div>
                    <h3 className="services-index-item__header-3--description">{this.props.service.long_description}</h3>
                </div>
                <div className="border-maker"></div>
            </Fade>
        );
    }
}