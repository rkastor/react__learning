import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import logo from './logo.svg'; 

// localization area
// import LocalizedStrings from 'react-localization';
// import {localiz} from './locale.js';
// let resources = new LocalizedStrings({localiz});

class HeaderLogo extends React.Component {
    
    render() {
        return (
            // <a href="/" className={"header__" + logo.class}>
            <a href="/" className="header__logo">
                {/* <img src={logo} alt={logo.text} className={"header__" + logo.imgClass} /> */}
                <img src={logo} alt={logo.text} className="header__logo" />
            </a>
        )
    }
};


class MenuNav extends React.Component {
  blockClass = 'nav';

  render() {
    return (

        <ul className="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/page1">About</Link>
            </li>
            <li>
                <Link to="/page2">Topics</Link>
            </li>
        </ul>
    );
  } 
}

const HeaderBlock = () => (
    <header className="header">
        <HeaderLogo />
        <MenuNav />
    </header>
)

export default HeaderBlock;
