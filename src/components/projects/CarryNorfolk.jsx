import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';

import Carry1 from '../../img/Carry/Carry1.jpg';
import Carry2 from '../../img/Carry/Carry2.png';
import Carry3 from '../../img/Carry/Carry3.jpg';
import CarryThumb from '../../img/Carry/CarryThumb.png';


const images = [
    Carry1,
    Carry2,
    Carry3
];

export default class CarryNorfolk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    componentDidMount = function () {
        // Stops iframe from playing on Modal-Close
        function iframeReload() {
            var iframe = document.getElementsByTagName('iframe');
            iframe[0].src = iframe[0].src;
        }

        // Toggles iframe mofals
        var toggleVimeoEmbed = function () {
            vimeoLightbox[0].classList.toggle("lightboxVisible");
        };

        var vimeoLightbox = document.getElementsByClassName("iframeContainer");
        vimeoLightbox[0].addEventListener('click', toggleVimeoEmbed);
        vimeoLightbox[0].addEventListener('click', iframeReload);


        var vidThumb = document.getElementsByClassName("carryThumb");
        vidThumb[0].addEventListener('click', toggleVimeoEmbed);
    };

    render() {
        var numberSetter = 0;
        function deviceSizer(x) {
            if (x.matches) {
                numberSetter = 100;
            }
        }
        var x = window.matchMedia("(min-width: 700px)")
        deviceSizer(x)
        const { photoIndex, isOpen } = this.state;
        return (
            <div className="outerProject">
                <HeaderNav />
                <div className="projectPage short">
                    <div className="backArrow">
                        <Link to="/portfolio">
                            <img src={BackArrow} alt="Back to Portfolio" />
                        </Link>
                    </div>
                    <div className="projectContainer">
                        <section className="galleryContainer">
                            <img src={CarryThumb} alt="" className="carryThumb" />
                            <img src={Carry1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Carry2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Carry3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />

                        </section>
                        <section className="description">
                            <h3>Carry Norfolk</h3>
                            <h5>Multimedia / Branding / Identity</h5>
                            <h5 className="projDate">Winter 2017</h5>
                            <div className="fakeHR" />
                            <p>Carry Norfolk is your friendly neighborhood courier service with a knack for community spirit and a love for fixed gear bikes. The "C" stands for yeah, Carry, but it also sticks close to the company's real love, bicycles. </p>
                            <p>The chain keeps the cogs spinning and the wheels moving and the pedals churning all in an effort to get the customer their burrito/beer/divorce papers as quickly as humanly possible. Literally. Bicycles are human powered.</p>
                        </section>
                        <div className="iframeContainer">
                            <div className="innerIframeContainer">
                                <iframe title="galleryVid" src="https://player.vimeo.com/video/193799320" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                        enableZoom={false}
                        imagePadding={numberSetter}
                    />
                )}
            </div>
        );
    }
};
