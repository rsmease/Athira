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
        this.setState({ currentYear: new Date() });
    }

    render() {
        return (
            <footer>
                <section className="footer__legal">
                    <p>{`© ${this.state.currentYear ? this.state.currentYear.getFullYear() : ""} Athira, LLC`}</p>
                    <Link to='/terms'>Terms of Service</Link>
                </section>
                <section className="footer__social">
                    <div></div>
                    <a href="https://www.linkedin.com" target="_blank">
                        <Typicons.TiSocialLinkedinCircular />
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <Typicons.TiSocialFacebookCircular />
                    </a>
                </section>
            </footer>
        )
    }
}

export default Footer;