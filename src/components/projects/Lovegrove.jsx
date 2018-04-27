import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import Lovegrove1 from '../../img/Lovegrove/Lovegrove3.jpg';
import Lovegrove3 from '../../img/Lovegrove/Lovegrove5.jpg';
import Lovegrove4 from '../../img/Lovegrove/Lovegrove6.jpg';
import LovegroveThumb from '../../img/Lovegrove/LovegroveVidThumb.png';

const images = [
    Lovegrove1,
    Lovegrove3,
    Lovegrove4
];

export default class Lovegrove extends Component {
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


        var vidThumb = document.getElementsByClassName("loveThumb");
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
                            <img src={LovegroveThumb} alt="" className="loveThumb" />
                            <img src={Lovegrove1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Lovegrove3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Lovegrove4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                        </section>
                        <section className="description">
                            <h3>Ross Lovegrove, Website</h3>
                            <h5>Web Development</h5>
                            <h5>Nov, 2009</h5>
                            <div className="fakeHR" />
                            <p>"Ross Lovegrove is a designer and visionary whose work is considered to be at the very apex of stimulating a profound change in the physicality of our three dimensional world."</p>
                            <p>A bio like that requires an equally profound website... Sadly I didn't have access to any Augmented Reality software so I had to settle for stark black and white with pops of sunset orange to reflect Ross's meld of technology and nature</p>
                        </section>

                        <div className="iframeContainer">
                            <div className="innerIframeContainer">
                                <iframe title="galleryVid" src="https://player.vimeo.com/video/195355328" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
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
