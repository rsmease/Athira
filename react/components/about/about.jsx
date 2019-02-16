import React from "react";
import { Link } from "react-router-dom";
import * as Material from "react-icons/lib/md";

import StaticHeroImage from "../hero/static_hero_image";
import LeaderIndexItem from "./leader_index_item";
import Contact from "../contact/contact";

import Fade from "react-reveal/Fade";

class About extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    window.scroll(0, 0);
  }

  componentDidMount() {
    this.props.getAllLeaders();
    this.props.getAllCompanies();
  }

  setImageURL() {
    if (this.props.company && this.props.company.about_image_url.length) {
      return this.props.company.about_image_url;
    } else {
      return "";
    }
  }

  renderLeaders() {
    if (this.props.leaders && this.props.leaders.length) {
      return (
        <React.Fragment>
          {this.props.leaders.map(leader => (
            <LeaderIndexItem
              key={leader.id}
              alignment={leader.id % 2 === 0 ? "left" : "right"}
              leader={leader}
            />
          ))}
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="hero__container vision-obstacles-execution-container">
          <StaticHeroImage imageURL={this.setImageURL()} />
        </section>
        <section className="main__meta-container">
          <div className="summary__container--with-title">
            <h2 className="summary__header-2">About Athira</h2>
            <div
              className="summary__header-3"
              dangerouslySetInnerHTML={{
                __html:
                  this.props.company && this.props.company.long_description
                    ? this.props.company.long_description
                    : ""
              }}
            />
          </div>
          <div className="leaders-index__container">{this.renderLeaders()}</div>
          <Contact
            email_address={
              this.props.company ? this.props.company.email_address : ""
            }
            phone_number={
              this.props.company ? this.props.company.phone_number : ""
            }
          />
        </section>
      </React.Fragment>
    );
  }
}

export default About;
