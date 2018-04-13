import React from 'react';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';

import ServicesIndexItem from './services_index_item';

class ServicesIndex extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getAllServices();
    }

    renderServices() {
        if (this.props.services && this.props.services.length) {
            return (
                <React.Fragment>
                    {this.props.services.map(service => (
                        <ServicesIndexItem key={service.id} service={service} />
                    ))}
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
                    <div className="services-index__container--ServiceIndex">
                        {this.renderServices()}
                    </div>
                </section>
                <Contact />
            </React.Fragment >
        )
    }
}

export default ServicesIndex;