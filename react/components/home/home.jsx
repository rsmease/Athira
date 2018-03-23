import React from 'react';
import { Link } from 'react-router-dom';
import * as Typicon from 'react-icons/lib/ti';

class Home extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.requestAllReviews();
        this.props.requestAllServices();
    }

    renderServices() {
        if (this.props.services.length) {
            return (
                <React.Fragment></React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    {this.props.services.map(service => (
                        <h1>{service.name}</h1>
                    ))}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="home__hero--container">
                </section >
                <section className="home__services--container">
                    {this.renderServices()}
                </section>
                <section className="home__reviews--container">
                </section>
                <section className="home__contact--container">
                </section>
            </React.Fragment>
        )
    }
}

export default Home;