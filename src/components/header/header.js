import React from 'react';
import './header.css'; 
import logo from './logo.svg'; 

// localization area
// import LocalizedStrings from 'react-localization';
// import {localiz} from './locale.js';
// let resources = new LocalizedStrings({localiz});

class menuItemElement extends React.Component {

    static menuItem = [
        {
            name: 'меню',
            url: '1'
        },
        {
            name: 'меню',
            url: '2'
        },
        {
            name: 'меню',
            url: '3'
        },
    ];
}; 

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
            {menuItemElement.menuItem.map((item, index ) => 
                <li key={index}>
                    <a href={item.url}>{item.name + '-' + (index + 1)}</a>
                </li>
            )}
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
