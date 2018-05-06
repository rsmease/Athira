import React from 'react';
import Slider from 'react-slick';
import HeroCarouselImage from './hero_carousel_image';

class HeroCarousel extends React.Component {
    constructor() {
        super();
    }

    renderImages() {
        const settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            swipe: true
        };
        if (this.props.imageURLs && this.props.imageURLs.length) {
            return (
                <Slider {...settings}>
                    {this.props.imageURLs.map(imageURL => (
                        <HeroCarouselImage key={Math.random()} imageURL={imageURL} headline={this.props.headline ? this.props.headline : ''} />
                    ))}
                </Slider>
            )
        }
    }

    render() {
        return (
            <div className='hero__container'>
                {this.renderImages()}
            </div>
        )
    }
}

export default HeroCarousel;