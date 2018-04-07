import React from 'react';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';

import ServiceIndexItem from './service_index_item';
import ReviewIndexItem from './review_index_item';
import Contact from '../contact/contact';

class Home extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getAllReviews();
        this.props.getAllServices();
        this.props.getAllCompanies().then(console.log(this.props));
    }

    renderHeroBackground() {
        if (this.props.company && this.props.company.splash_image_url) {
            return {
                'background-image': `url(${this.props.company.splash_image_url})`
            };
        } else {
            return {};
        }
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
                        return <ReviewIndexItem key={review.id} review={review} alignment={alignment} />;
                    })}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="hero__container"
                    style={this.renderHeroBackground()}>
                    <div className="hero__opacity-container">
                        <h1 className="hero__header-1">{
                            (this.props.company && this.props.company.headline) ? this.props.company.headline : ''
                        }</h1>
                    </div>
                </section >
                <section className="main__meta-container">
                    <div className="summary__container">
                        <h3 className="summary__header-3">{
                            (this.props.company && this.props.company.short_description) ? this.props.company.short_description : ''
                        }</h3>
                    </div>
                    <div className="services-index__container--home">
                        {this.renderServices()}
                    </div>
                    <div className="home__reviews--container">
                        <div></div>
                        {this.renderReviews()}
                        <div></div>
                    </div>
                </section>
                <Contact />
            </React.Fragment >
        )
    }
}

export default Home;