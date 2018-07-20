import React from 'react';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';

import Contact from '../contact/contact';
import LeaderIndexItem from './leader_index_item';

import Fade from 'react-reveal/Fade';

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
            )
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="main__meta-container">
                    <Fade bottom cascade>
                        <div className="summary__container--with-title">
                            <h2 className="summary__header-2">About Athira</h2>
                            <div className="summary__header-3" dangerouslySetInnerHTML={
                                { __html: this.props.company && this.props.company.long_description ? this.props.company.long_description : '' }
                            } />
                        </div>
                    </Fade>
                    <div className="leaders-index__container">
                        {this.renderLeaders()}
                    </div>
                    <Contact
                        email_address={this.props.company ? this.props.company.email_address : ''}
                        phone_number={this.props.company ? this.props.company.phone_number : ''}
                    />
                </section>
            </React.Fragment >
        )
    }
}

export default About;
