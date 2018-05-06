import React from 'react';
import Slider from 'react-slick';
import HeroCarouselImage from './hero_carousel_image';

class HeroCarousel extends React.Component {
    constructor() {
        super();
    }

    renderImages() {
        console.log(this.props.imageURLs)
        if (this.props.imageURLs && this.props.imageURLs.length) {
            return (
                <React.Fragment>
                    {this.props.imageURLs.map(imageURL => (
                        <HeroCarouselImage key={Math.random()} imageURL={imageURL} headline='Test of Headline' />
                    ))}
                </React.Fragment>
            )
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500
        };
        return (
            <Slider {...settings}>
                {this.renderImages()}
            </Slider>
        )
    }
}

export default HeroCarousel;