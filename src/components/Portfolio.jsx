import React, { Component } from 'react';
import { Link } from "react-router-dom";

import HeaderNav from './HeaderNav.jsx';
import Footer from './Footer.jsx';
import HeroImg from '../img/hero.png';
import MobileAppCover from '../img/App/App1.jpg';
import OcampoCover from '../img/Ocampo/Ocampo5.jpg';
import HomesCover from '../img/MyHomes/Myhomes1.jpg';
import VigilCover from '../img/Vigil/Vigil1.jpg';
import SpaceCover from '../img/Space/Space1.jpg';
import ImprintCover from '../img/Imprint/Imprint1.jpg';
import LovegroveCover from '../img/Lovegrove/Lovegrove1.jpg';
import IconCover from '../img/Icon/Icon1.jpg';
import CarryCover from '../img/Carry/Carry2.png';
import PizzaCover from '../img/Bodacious/Bodacious4.png';
import BreweryCover from '../img/Brau/Brau6.jpg';
import GrowCover from '../img/Grow/Grow5.jpg';



export default class Portfolio extends Component {
  componentDidMount = function () {
    var galleryItem = document.getElementsByClassName("galleryItem");

    var galleryMouseOver = function () {
      this.classList.add("hoverActive");
    };

    var galleryMouseOut = function () {
      this.classList.remove("hoverActive");
    };

    Array.from(galleryItem).forEach(function (element) {
      element.addEventListener('mouseenter', galleryMouseOver);
      element.addEventListener('mouseleave', galleryMouseOut);
    });
  };

  render() {
    return (
      <div>
        <HeaderNav />
        <div className="portfolioCont">
          <img src={HeroImg} alt="Main Hero" className="heroImg" />
          <div className="gallery">
            <ul className="galleryItem mobileApp">
              <Link to="/portfolio/ios-homes">
                <img src={MobileAppCover} alt="" />
                <h5>iOS App, Homes.com</h5>
                <h6>UI/UX</h6>
              </Link>
            </ul>
            <ul className="galleryItem ocampo">
              <Link to="/portfolio/ocampo">
                <img src={OcampoCover} alt="" />
                <h5>Ocampo Wedding, Enamel Pins</h5>
                <h6>Illustration, Packaging, Product</h6>
              </Link>
            </ul>
            <ul className="galleryItem homes">
              <Link to="/portfolio/my-homes">
                <img src={HomesCover} alt="" />
                <h5>My Homes, Homes.com</h5>
                <h6>UI/UX</h6>
              </Link>
            </ul>
            <ul className="galleryItem vigil">
              <Link to="/portfolio/vigil">
                <img src={VigilCover} alt="" />
                <h5>Vigil Candle Co.</h5>
                <h6>Branding, Illustration, Product</h6>
              </Link>
            </ul>
            <ul className="galleryItem space">
              <Link to="/portfolio/space">
                <img src={SpaceCover} alt="" />
                <h5>Space Age</h5>
                <h6>Web Development, Illustration</h6>
              </Link>
            </ul>
            <ul className="galleryItem imprint">
              <Link to="/portfolio/imprint">
                <img src={ImprintCover} alt="" />
                <h5>Imprint <span>(Unused)</span></h5>
                <h6>Multimedia, Branding, Identity</h6>
              </Link>
            </ul>
            <ul className="galleryItem lovegrove">
              <Link to="/portfolio/ross-lovegrove">
                <img src={LovegroveCover} alt="" />
                <h5>Ross Lovegrove, Website</h5>
                <h6>Web Development</h6>
              </Link>
            </ul>
            <ul className="galleryItem icon">
              <Link to="/portfolio/icons">
                <img src={IconCover} alt="" />
                <h5>Icon Construction Grid</h5>
                <h6>UI/UX, System Design</h6>
              </Link>
            </ul>
            <ul className="galleryItem carry">
              <Link to="/portfolio/carry-norfolk">
                <img src={CarryCover} alt="" />
                <h5>Carry Norfolk</h5>
                <h6>Multimedia, Branding, Identity</h6>
              </Link>
            </ul>
            <ul className="galleryItem pizza">
              <Link to="/portfolio/bodacious-pizza">
                <img src={PizzaCover} alt="" />
                <h5>Bodacious Pizza</h5>
                <h6>Branding, Identity, Product</h6>
              </Link>
            </ul>
            <ul className="galleryItem brewery">
              <Link to="/portfolio/brau-haus">
                <img src={BreweryCover} alt="" />
                <h5>Brau Haus Brewing</h5>
                <h6>Branding, Identity, Packaging</h6>
              </Link>
            </ul>
            <ul className="galleryItem grow">
              <Link to="/portfolio/groweather">
                <img src={GrowCover} alt="" />
                <h5>Groweather</h5>
                <h6>UI/UX, Idenity, Branding</h6>
              </Link>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};





