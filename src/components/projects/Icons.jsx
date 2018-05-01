import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';


import Icon1 from '../../img/Icon/Icon1.jpg';
import Icon2 from '../../img/Icon/Icon2.jpg';
import Icon3 from '../../img/Icon/Icon3.jpg';
import Icon4 from '../../img/Icon/Icon4.jpg';
import Icon5 from '../../img/Icon/Icon5.jpg';
import IconsThumb from '../../img/Icon/IconsThumb.png';

const images = [
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5
];


export default class Icons extends Component {
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


        var vidThumb = document.getElementsByClassName("iconsThumb");
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
                            <img src={IconsThumb} alt="" className="iconsThumb" />
                            <img src={Icon3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Icon2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Icon1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Icon4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={Icon5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                        </section>
                        <section className="description">
                            <h3>Icon Construction Grid</h3>
                            <h5>UI/UX, System Design</h5>
                            <h5 className="projDate">Nov, 2009</h5>
                            <div className="fakeHR" />
                            <p>While working at Homes.com we got tired of having to school new designers on how to properly build or utilize icons for their UI Designs while also sticking to our brand standards. In an effort to streamline this process we created this nifty little construction grid that helps the new recruits (and the old ones too) accomplish all those things. </p>
                            <p>This grid gives you all the tools you need to create beautiful and simple icons that are readable at every scale, and also maintain consistent line weight, corner radiuses, and interior dimensions. Plus it's really trippy to look at, just try designing icons for 8 hours straight.</p>
                        </section>
                        <div className="iframeContainer">
                            <div className="innerIframeContainer">
                                <iframe title="galleryVid" src="https://player.vimeo.com/video/215875633" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
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
