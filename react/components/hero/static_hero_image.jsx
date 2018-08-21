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

  //special styling for Vision Obstacles Execution graphic
  render() {
    return (
      <section className="hero__container-image vision-obstacles-execution"
        style={this.setBackground(this.props.imageURL)}>
      </section >
    )
  }
}

export default StaticHeroImage;
