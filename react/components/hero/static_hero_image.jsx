import React from 'react';

class StaticHeroImage extends React.Component {
  constructor() {
    super();
  }

  setBackground(url) {
    if (url.length) {
      return { 'backgroundImage': `url(${url})` }
    } else {
      return { 'backgroundImage': `linear-gradient(to right top, #7accca, #5ca5a4, #40807f)` }
    }
  }

  render() {
    return (
      <section className="hero__container-image"
        style={this.setBackground(this.props.imageURL)}>
      </section >
    )
  }
}

export default StaticHeroImage;
