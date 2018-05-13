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
            speed: 6000,
            autoplay: true,
            autoplaySpeed: 6000,
            fade: true,
            swipe: true,
            pauseOnHover: false
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