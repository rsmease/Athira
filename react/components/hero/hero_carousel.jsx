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
            arrows: false,
            infinite: true,
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            swipe: true,
            pauseOnHover: false
        };
        if (this.props.imageURLs && this.props.imageURLs.length) {
            return (
                <Slider {...settings}>
                    {this.props.imageURLs.map((imageURL, idx) => (
                        <HeroCarouselImage key={Math.random()} imageURL={imageURL} headline={this.props.headlines ? this.props.headlines[idx] : ''} />
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
