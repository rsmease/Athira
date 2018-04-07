import React from 'react';
import { Link } from 'react-router-dom';
import * as Material from 'react-icons/lib/md';

class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="home__contact--container">
                <h1 className="home__contact--text">Say Hello!</h1>
                <div className="home__contact--methods">
                    <Material.MdEmail className="home__contact--methods-icon" />
                    <h2 className="home__contact--email">hello@athira.com</h2>
                    <Material.MdPhoneIphone className="home__contact--methods-icon" />
                    <h2 className="home__contact--phone">(415) 638-1940</h2>
                </div>
            </section>
        )
    }
}

export default Contact;