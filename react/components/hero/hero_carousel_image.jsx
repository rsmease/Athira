import React from 'react';

class HeroCarouselImage extends React.Component {
    constructor() {
        super();
    }

    renderHeroBackground(idx) {
        if (this.props.imageURL && window.innerWidth > 900) {
            return {
                'backgroundImage': `url(${this.props.imageURL})`
            };
        } else if (idx % 2 == 0) {
            return { 'backgroundImage': `linear-gradient(to left bottom, #b3ac8a, #b0a173, #af955c, #af8946, #b07b31)` };
        } else {
            return { 'backgroundImage': `linear-gradient(to right top, #b3ac8a, #b0a173, #af955c, #af8946, #b07b31)` };
        }
    }

    render() {
        return (
            <section className="hero__container-image"
                style={this.renderHeroBackground(this.props.idx)}>
                <div className="hero__overlay-container">
                    <h1 className="hero__header-1">{
                        (this.props.headline) ? this.props.headline : ''
                    }</h1>
                </div>
            </section >
        )
    }
}

export default HeroCarouselImage;
