import React from 'react';
import { Link } from 'react-router-dom';
import * as Typicon from 'react-icons/lib/ti';

import HeroImage from './hero';

class Home extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props);
        this.props.getAllReviews();
        this.props.getAllServices();
    }

    renderServices() {
        if (this.props.services && this.props.services.length) {
            return (
                <React.Fragment>
                    {this.props.services.map(service => (
                        <h1>{service.name}</h1>
                    ))}
                </React.Fragment>
            )
        }
    }

    renderReviews() {
        if (this.props.reviews && this.props.reviews.length) {
            return (
                <React.Fragment>
                    {this.props.reviews.map(review => (
                        <h1>{review.title}</h1>
                    ))}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="home__hero--container">
                    <HeroImage />
                </section >
                <section className="home__services--container">
                    {this.renderServices()}
                </section>
                <section className="home__reviews--container">
                    {this.renderReviews()}
                </section>
                <section className="home__contact--container">
                </section>
            </React.Fragment>
        )
    }
}

export default Home;