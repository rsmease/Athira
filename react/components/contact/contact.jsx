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

    renderEmail() {
        if (this.props.email_address && this.props.email_address.length) {
            return (
                <div className="contact__container--methods-index-item">
                    <Material.MdEmail className="contact__icon contact__icon--email" />
                    <a href={`mailto:${this.props.email_address}`}>{this.props.email_address}</a>
                </div>
            )
        }
    }

    renderPhone() {
        if (this.props.phone_number && this.props.phone_number.length) {
            return (
                <div className="contact__container--methods-index-item">
                    <h4 >{this.props.phone_number}</h4>
                    <Material.MdPhoneIphone className="contact__icon contact__icon--phone" />
                </div>
            )
        }
    }

    render() {
        return (
            <section className="contact__container" style={this.addMarginOnContactPage()}>
                <h1 className="contact__header-1">Say Hello!</h1>
                <div className="contact__container--methods-index">
                    {this.renderEmail()}
                    {this.renderPhone()}
                </div>
            </section>
        )
    }
}

export default Contact;
