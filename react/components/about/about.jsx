import React from 'react';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';

import Contact from '../contact/contact';
import LeaderIndexItem from './leader_index_item';

class About extends React.Component {
    constructor() {
        super();
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
                <section className="hero__container">
                </section >
                <section className="main__meta-container">
                    <div className="summary__container--with-title">
                        <h2 className="summary__header-2">About Athira</h2>
                        <h3 className="summary__header-3">{
                            (this.props.company && this.props.company.long_description) ? this.props.company.long_description : ''
                        }</h3>
                    </div>
                    <div className="leaders-index__container">
                        {this.renderLeaders()}
                    </div>
                    <Contact />
                </section>
            </React.Fragment >
        )
    }
}

export default About;