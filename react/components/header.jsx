import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../app/assets/images/full-logo.png';
import * as ScrollMagic from 'scrollmagic';

class Header extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.buildStickyHeaderAnimation();
    }

    buildStickyHeaderAnimation() {
        const controller = new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: "header",
        }).setPin("header").addTo(controller);;

    }

    render() {
        return (
            <header>
                <section className="header__logo--container">
                    <Link to="/" className="header__link--home">
                        <img className="header__logo" src={Logo} alt="athira logo" />
                    </Link>
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