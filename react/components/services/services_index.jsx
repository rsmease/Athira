import React from 'react';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';

import { ServicesIndexItemLeft, ServicesIndexItemRight, ServicesIndexItemMobile } from './services_index_item';

class ServicesIndex extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getAllServices();
    }

    renderServices() {
        if (this.props.services && this.props.services.length) {
            if (window.innerWidth < 800) {
                return (
                    <React.Fragment>
                        {this.props.services.map(service => {
                            return <ServicesIndexItemMobile key={service.id} service={service} />
                        })}
                    </React.Fragment>
                )
            }
            return (
                <React.Fragment>
                    {this.props.services.map(service => {
                        if (service.id % 2 === 0) {
                            return <ServicesIndexItemLeft key={service.id} service={service} />
                        } else {
                            return <ServicesIndexItemRight key={service.id} service={service} />
                        }
                    })}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="hero__container">
                </section >
                <section className="main__meta-container">
                    <div className="services-index__container">
                        {this.renderServices()}
                    </div>
                </section>
            </React.Fragment >
        )
    }
}

export default ServicesIndex;