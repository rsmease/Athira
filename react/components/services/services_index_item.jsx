import React from 'react';
import * as Material from 'react-icons/lib/md';
import Fade from 'react-reveal/Fade';

export class ServicesIndexItemLeft extends React.Component {

    render() {
        return (
            <Fade left>
                <div className="services-index-item__container" id={
                    `service-${this.props.service.id}`}>
                    <div className="services-index-item__container--header">
                        <div className="services-index-item__image-container">
                            <img className="services-index-item__icon" src={this.props.service.icon_url} />
                        </div>
                        <h3 className="services-index-item__header-3--name">{this.props.service.name}</h3>
                    </div>
                    <div className="services-index-item__header-3--description" dangerouslySetInnerHTML={
                        { __html: this.props.service.long_description }
                    } />
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
                <div className="services-index-item__container" id={
                    `service-${this.props.service.id}`}>
                    <div className="services-index-item__header-3--description" dangerouslySetInnerHTML={
                        { __html: this.props.service.long_description }
                    } />
                    <div className="services-index-item__container--header">
                        <div className="services-index-item__image-container">
                            <img className="services-index-item__icon" src={this.props.service.icon_url} />
                        </div>
                        <h3 className="services-index-item__header-3--name">{this.props.service.name}</h3>
                    </div>
                </div>
                <div className="border-maker"></div>
            </Fade >
        );
    }
}

export class ServicesIndexItemMobile extends React.Component {

    render() {
        return (
            <Fade bottom cascade>
                <div id={`service-${this.props.service.id}`} style={{ height: '100px' }}></div>
                <div className="services-index-item__container">
                    <div className="services-index-item__container--header">
                        <div className="services-index-item__image-container">
                            <img className="services-index-item__icon" src={this.props.service.icon_url} id={
                                `service-${this.props.service.id}`} />
                        </div>
                        <h3 className="services-index-item__header-3--name">{this.props.service.name}</h3>
                    </div>
                    <div className="services-index-item__header-3--description" dangerouslySetInnerHTML={
                        { __html: this.props.service.long_description }
                    } />
                </div>
                <div className="border-maker"></div>
            </Fade>
        );
    }
}
