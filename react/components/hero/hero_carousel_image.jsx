import React from 'react';

class HeroCarouselImage extends React.Component {
    constructor() {
        super();
    }

    renderHeroBackground(idx) {
        if (this.props.imageURL) {
            return {
                'backgroundImage': `url(${this.props.imageURL})`
            };
        } else if (idx % 2 == 0) {
            return { 'backgroundImage': `linear-gradient(to right top, #7accca, #5ca5a4, #40807f)` };
        } else {
            return { 'backgroundImage': `linear-gradient(to right top, #7accca, #5ca5a4, #40807f)` };
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
