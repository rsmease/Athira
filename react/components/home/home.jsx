import React from 'react';
import { Link } from 'react-router-dom';
import * as Typicon from 'react-icons/lib/ti';

import ServiceIndexItem from './service_index_item';
import ReviewIndexItem from './review_index_item';

class Home extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getAllReviews();
        this.props.getAllServices();
    }

    renderServices() {
        if (this.props.services && this.props.services.length) {
            return (
                <React.Fragment>
                    {this.props.services.map(service => (
                        <ServiceIndexItem key={service.id} service={service} />
                    ))}
                </React.Fragment>
            )
        }
    }

    renderReviews() {
        if (this.props.reviews && this.props.reviews.length) {
            return (
                <React.Fragment>
                    {this.props.reviews.map(function (review, i) {
                        let alignment = (i % 2 === 0 ? 'left' : 'right');
                        return <ReviewIndexItem review={review} alignment={alignment} />;
                    })}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="home__hero--container">
                    <div className="home__hero--opacity">
                        <h1 className="home__hero--text">Call to Action</h1>
                    </div>
                </section >
                <section className="home__main--container">
                    <section className="home__services--container">
                        <div className="home__services--summary-container">
                            <h1 className="home__services--summary-text">We perform these services for you when you work with our company. We believe these services help you for these reasons.</h1>
                        </div>
                        <div className="home__services--items-container">
                            {this.renderServices()}
                        </div>
                    </section>
                    <section className="home__reviews--container">
                        {this.renderReviews()}
                    </section>
                    <section className="home__contact--container">
                        <h1 className="home__contact--text">Let's Talk</h1>
                        <h2 className="home__contact--email">hello@athira.com</h2>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;