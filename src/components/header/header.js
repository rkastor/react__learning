import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg'; 

// localization area
// import LocalizedStrings from 'react-localization';
// import {localiz} from './locale.js';
// let resources = new LocalizedStrings({localiz});
const navClass = 'nav';

class HeaderLogo extends React.Component {
    
    render() {
        return (
            <Link to="/" className="header__logo">
                <img src={logo} alt={logo.text} className="header__img" />
            </Link>
        )
    }
};


class MenuNav extends React.Component {

  render() {
    return (

        <ul className={navClass}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/page1">About</Link>
            </li>
            <li>
                <Link to="/page2">Topics</Link>
            </li>
            <li>
                <Link to="/page3">Other</Link>
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
