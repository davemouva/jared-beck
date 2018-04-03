import LandingImage from '../img/landing-graphic.png';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
    componentWillMount() { document.body.style.backgroundColor = "#f47c20"; }
    componentDidMount() {
        var el = document.querySelector('.loader');
        console.log(el);
        if (el !== null) {
            el.parentNode.removeChild(el);
        }

    }
    componentWillUnmount() { document.body.style.backgroundColor = "#fbfbfb"; }

    render() {
        return (
            <div className="landingApp">
                <div className="mainContainer">
                    <h2 className="landingNav"><Link to="/portfolio">Portfolio</Link></h2>
                    <div className="landing">
                        <img src={LandingImage} className="landing-logo" alt="landing logo" />
                    </div>
                    <h2 className="landingNav"><Link to="/shop">Shop</Link></h2>
                </div>
            </div>

        );
    }
}


