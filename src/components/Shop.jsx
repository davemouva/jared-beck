import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Shop extends Component {
    render() {
        return (
            <div>
                <h1>Shop</h1>
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/portfolio">Portfolio</Link></h2>
            </div>
        );
    }
};
