import React from 'react';
import { Link } from 'react-router-dom';
import * as Typicons from 'react-icons/lib/ti';
//add for commit
class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            currentYear: undefined
        }
    }

    componentDidMount() {
        this.props.getAllCompanies();
        this.props.getAllTerms();
        this.setState({ currentYear: new Date() });
    }

    renderTermsLink() {
        if (this.props.terms && this.props.terms.length) {
            const termTitle = this.props.terms[0].title;
            return (
                <Link to='/terms'>{termTitle}</Link>
            );
        }
    }

    render() {
        return (
            <footer>
                <section className="footer__legal">
                    <p>{`© ${this.state.currentYear ? this.state.currentYear.getFullYear() : ""} Athira, LLC`}</p>
                    {this.renderTermsLink()}
                </section>
                <section className="footer__social">
                    <a href={this.props.company ? this.props.company.linkedin_url : ''} target="_blank">
                        <Typicons.TiSocialLinkedinCircular />
                    </a>
                    <a href={this.props.company ? this.props.company.facebook_url : ''} target="_blank">
                        <Typicons.TiSocialFacebookCircular />
                    </a>
                </section>
            </footer>
        )
    }
}

export default Footer;