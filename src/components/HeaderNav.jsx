import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import homeFlag from '../img/flag.png';

export default class HeaderNav extends Component {

  componentDidMount = function () {

    var toggleMenuFlag = function () {
      this.classList.toggle("sideMenuVisible");
    };

    var menuItem = document.getElementsByClassName("menuFlag");
    menuItem[0].addEventListener('click', toggleMenuFlag);

  };

  render() {
    return (
      <div className="navCont">
        <Link to="/"><img src={homeFlag} alt="return home" className="homeFlag" /></Link>
        <img src={homeFlag} alt="menu" className="menuFlag" />
        <div className="menuCont">
          <h2><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></h2>
          <h2><NavLink to="/about" activeClassName="active">About</NavLink></h2>
          <h2><NavLink to="/blog" activeClassName="active">Blog</NavLink></h2>
          <h2><a href="http://Hellojared.bigcartel.com" target="_blank" rel="noopener noreferrer" activeClassName="active">Shop</a></h2>
           
        </div>
      </div>
    );
  }
}

