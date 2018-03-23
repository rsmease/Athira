import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header>
                <section className="header__logo--container">
                    <Link to="/" className="header__navigation-link">Athira</Link>
                </section>
                <section className="header__navigation-link--container">
                    <Link to="/about" className="header__navigation-link--about">About</Link>
                    <Link to="/services" className="haeder__navigation-link--services">Services</Link>
                    <Link to="/contact" className="haeder__navigation-link--contact">Contact</Link>
                </section>
            </header>
        );
    }
}

export default Header;