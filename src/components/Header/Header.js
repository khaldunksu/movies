import React from 'react';
import './Header.scss';
import logo from "../../svg/header-logo.svg";
const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="header_logo" alt="logo" />
            <p className="header_title">Kaboodle</p>
            <p className="header_text">DISCOVER AND SHARE MOVIES AND TV SHOWS WITH YOUR FRIENDS</p>
            <nav className="header_nav">
                <ul className="header_links">
                    <li className="header_links_item ">
                        <a href="/#" className="signup">Sign up</a>
                    </li>
                    <li>
                        <a href="/#" className="header_links_item login">Log in</a>
                    </li>
                    <li>
                        <a href="/#" className="header_links_item about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header