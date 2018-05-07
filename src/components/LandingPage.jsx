import LandingImage from '../img/landing-graphic.png';
import LoadingGif from '../img/loader.gif';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
    componentWillMount() { document.body.style.backgroundColor = "#f47c20"; }
    componentDidMount() {
        let mainContainer = document.getElementsByClassName('mainContainer')[0];
        mainContainer.style.display = "none";
        
        setTimeout(function () {
            let pencilLoader = document.getElementsByClassName('loadingGifContainer')[0];
            pencilLoader.style.display = "none";
            mainContainer.style.display = "flex";
        }, 2500);
    }
    componentWillUnmount() { document.body.style.backgroundColor = "#fbfbfb"; }

    render() {
        return (
            <div className="landingApp">
                <div className="loadingGifContainer">
                    <img className="loadingGif" src={LoadingGif} alt="Loading Animation" />
                </div>
                <div className="mainContainer">
                    <h2 className="landingNav portfolio"><Link to="/portfolio">Portfolio</Link></h2>
                    <div className="landing">
                        <img src={LandingImage} className="landing-logo" alt="landing logo" />
                    </div>
                    <h2 className="landingNav shop"><a href="http://Hellojared.bigcartel.com" target="_blank" rel="noopener noreferrer">Shop</a></h2>
                </div>
            </div>
        );
    }
}


