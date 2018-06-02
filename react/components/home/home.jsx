import React from 'react';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';

import Fade from 'react-reveal/Fade';

import HeroCarousel from '../hero/hero_carousel';
import ServicesIndexItem from './services_index_item--home';
import ReviewsIndexItem from './reviews_index_item--home';
import Contact from '../contact/contact';

class Home extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        window.scroll(0, 0);
    }

    componentDidMount() {
        this.props.getAllReviews();
        this.props.getAllServices();
        this.props.getAllCompanies();
        this.props.getAllImageCarousels();
    }

    renderHeroBackground() {
        if (this.props.company && this.props.company.splash_image_url) {
            return {
                'backgroundImage': `url(${this.props.company.splash_image_url})`
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
                        <ServicesIndexItem key={service.id} service={service} />
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
                        return <ReviewsIndexItem key={review.id} review={review} alignment={alignment} />;
                    })}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <HeroCarousel
                    imageURLs={
                        this.props.imageCarousel.length ? this.props.imageCarousel[0].urls : []
                    }
                    headline={
                        this.props.imageCarousel.length ? this.props.imageCarousel[0].headline : ''
                    }
                />
                <section className="main__meta-container">
                    <div className="summary__container">
                        <h3 className="summary__header-3">{
                            (this.props.company && this.props.company.short_description) ? this.props.company.short_description : ''
                        }</h3>
                    </div>
                    <div className="services-index__container--home">
                        {this.renderServices()}
                    </div>
                    <div className="reviews-index__container--home">
                        {this.renderReviews()}
                    </div>
                </section>
                <Contact />
            </React.Fragment >
        )
    }
}

export default Home;
