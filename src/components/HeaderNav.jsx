import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import homeFlag from '../img/flag.png';

export default class HeaderNav extends Component {
    render() {
        return (
          <div className="navCont">
            <Link to="/"><img src={homeFlag} alt="menu icon" className="homeFlag"/></Link>
            <div className="menuCont">
              <h2><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></h2>
              <h2><NavLink to="/about" activeClassName="active">About</NavLink></h2>
              <h2><NavLink to="/blog" activeClassName="active">Blog</NavLink></h2>
              <h2><NavLink to="/shop" activeClassName="active">Shop</NavLink></h2>
            </div>
          </div>
        );
    }
}
