import React from 'react';

class HeroCarouselImage extends React.Component {
    constructor() {
        super();
    }

    renderHeroBackground() {
        if (this.props.imageURL) {
            return {
                'backgroundImage': `url(${this.props.imageURL})`
            };
        } else {
            return {};
        }
    }

    render() {
        return (
            <section className="hero__container-image"
                style={this.renderHeroBackground()}>
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
