import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import Space1 from '../../img/Space/SpaceVidThumb.png';
import Space2 from '../../img/Space/Space2.jpg';
import Space3 from '../../img/Space/Space3.jpg';
import Space4 from '../../img/Space/Space4.jpg';
import Space5 from '../../img/Space/Space5.jpg';

const images = [
    Space2,
    Space3,
    Space4,
    Space5
];

export default class Space extends Component {
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


        var vidThumb = document.getElementsByClassName("spaceThumb");
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
                <div className="projectPage">
                    <div className="backArrow">
                        <Link to="/portfolio">
                            <img src={BackArrow} alt="Back to Portfolio" />
                        </Link>
                    </div>
                    <div className="projectContainer">
                        <section className="galleryContainer">
                            <img src={Space1} alt="" className="spaceThumb" />
                            <img src={Space2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Space3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Space4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Space5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                        </section>
                        <section className="description">
                            <h3>Space Age</h3>
                            <h5>Web Development, Illustration</h5>
                            <h5>Nov, 2009</h5>
                            <div className="fakeHR" />
                            <p>I did some of my best doodles in math and science class, and if it weren't for those classes who knows what I'd be doing now. Hopefully not math or science.</p>
                            <p>This website was created with the intention of getting kids interested in space and education while exercising their most important muscle, their imagination.</p>
                        </section>
                        <div className="iframeContainer">
                            <div className="innerIframeContainer">
                                <iframe title="galleryVid" src="https://player.vimeo.com/video/193798856" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
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
