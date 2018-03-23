import React from 'react';
import Link from 'react-router-dom'

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header>
                <section className="header__logo--container">
                    <Link className="header__navigation-link">Athira</Link>
                </section>
                <section>
                    <Link className="header__navigation-link">About</Link>
                    <Link className="haeder__navigation-link">Services</Link>
                    <Link className="haeder__navigation-link">Contact</Link>
                </section>
            </header>
        );
    }
}

export default Header;