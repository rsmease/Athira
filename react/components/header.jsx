import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../app/assets/images/full-logo.png';
import HamburgerMenu from 'react-hamburger-menu';
import Popup from 'reactjs-popup';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    handleHamburgerClick() {
        this.setState({
            open: !this.state.open
        });
    }

    closeHamburger() {
        if (this.state.open) {
            this.setState({ open: false })
        }
    }

    toggleNavLinkView() {
        if (window.innerWidth >= 769) {
            return this.renderNavLinks();
        } else {
            return this.renderHamburgerMenu();
        }
    }

    renderNavLinks() {
        return (
            <React.Fragment>
                <Link to="/about" className="header__navigation-link">About</Link>
                <Link to="/services" className="header__navigation-link">Services</Link>
                <Link to="/contact" className="header__navigation-link">Contact</Link>
            </React.Fragment>
        )
    }

    renderHamburgerMenu() {
        return (
            <Popup
                position="bottom right"
                closeOnDocumentClick
                trigger={
                    <div>
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleHamburgerClick.bind(this)}
                            width={36}
                            height={30}
                            strokeWidth={3}
                            rotate={0}
                            color='#FFDAA6'
                            borderRadius={0}
                            animationDuration={0.5}
                        />
                    </div>
                }
                contentStyle={{
                    border: '0',
                    padding: '0',
                }}
                arrowStyle={{
                    display: 'none'
                }}
                onClose={this.closeHamburger.bind(this)}
            >
                <div className="header__navigation-link--popup">
                    <Link to="/about" className="header__navigation-link">About</Link>
                    <Link to="/services" className="header__navigation-link">Services</Link>
                    <Link to="/contact" className="header__navigation-link">Contact</Link>
                </div>
            </Popup>
        )
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
                    {this.toggleNavLinkView()}
                </section>
            </header>
        );
    }
}

export default Header;
