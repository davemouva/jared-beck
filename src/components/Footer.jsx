import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FooterStamp from '../img/footer-stamp.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerInnerCont">
          <div className="social footerCol1">
            <h3>Social Media</h3>
            <h4><a href="">Instagram</a></h4>
            <h4><a href="">Dribbble</a></h4>
            <h4><a href="">Twitter</a></h4>
          </div>
          <div className="contact footerCol2">
            <h3>Contact</h3>
            <h4>(757) 401 5596</h4>
            <h4>work@hellojared.com</h4>
          </div>
          <div className="info footerCol3">
            <h3>Info</h3>
            <h4><a href="">Resume</a></h4>
            <h4><Link to="/about">About</Link></h4></div>
        </div>
        <img src={FooterStamp} className="footerStamp" alt="footer logo stamp" />
        <div className="blackBottomFooter">
          <h5>Hello Jared &#0169; 2018 All Rights Reserved</h5>
        </div>
      </div>
    );
  }
}
