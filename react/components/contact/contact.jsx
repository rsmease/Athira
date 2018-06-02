import React from 'react';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';

class Contact extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        window.scroll(0, 0);
    }

    addMarginOnContactPage() {
        return window.location.hash.includes('contact') ? { marginTop: "91px" } : {}
    }

    render() {
        return (
            <section className="contact__container" style={this.addMarginOnContactPage()}>
                <h1 className="contact__header-1">Say Hello!</h1>
                <div className="contact__container--methods-index">
                    <div className="contact__container--methods-index-item">
                        <Material.MdEmail className="contact__icon contact__icon--email" />
                        <h4>hello@athira.com</h4>
                    </div>
                    <div className="contact__container--methods-index-item">
                        <Material.MdPhoneIphone className="contact__icon" />
                        <h4 >(415) 638-1940</h4>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;
