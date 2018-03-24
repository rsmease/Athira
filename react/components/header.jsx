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
                    <Link to="/" className="header__navigation-link header__logo">Athira</Link>
                </section>
                <section className="header__navigation-link--container">
                    <Link to="/about" className="header__navigation-link">About</Link>
                    <Link to="/services" className="header__navigation-link">Services</Link>
                    <Link to="/contact" className="header__navigation-link">Contact</Link>
                </section>
            </header>
        );
    }
}

export default Header;