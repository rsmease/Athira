import React from 'react';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';

import Contact from '../contact/contact';

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
                        <h1>{leader.name}</h1>
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
                <section className="about__main--container">
                    <section className="about__mixed--container">
                        <div className="summary__container">
                            <h2 className="summary__header-2">About Athira</h2>
                            <h3 className="summary__header-3">{
                                (this.props.company && this.props.company.long_description) ? this.props.company.long_description : ''
                            }</h3>
                        </div>
                        <div className="home__leaders--items-container">
                            {this.renderLeaders()}
                        </div>
                    </section>
                    <Contact />
                </section>
            </React.Fragment >
        )
    }
}

export default About;