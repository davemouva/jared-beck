import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import Imprint1 from '../../img/Imprint/Imprint1.jpg';
import Imprint2 from '../../img/Imprint/Imprint2.jpg';
import Imprint3 from '../../img/Imprint/Imprint3.jpg';
import Imprint4 from '../../img/Imprint/Imprint4.gif';
import Imprint5 from '../../img/Imprint/Imprint5.jpg';
import Imprint6 from '../../img/Imprint/Imprint6.jpg';

const images = [
    Imprint1,
    Imprint2,
    Imprint3,
    Imprint4,
    Imprint5,
    Imprint6,
];

export default class Imprint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }
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
                            <img src={Imprint1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Imprint2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Imprint3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Imprint4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={Imprint5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                            <img src={Imprint6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                        </section>
                        <section className="description">
                            <h3>Imprint</h3>
                            <h5>Multimedia / Branding / Identity</h5>
                            <h5 className="projDate">Summer 2016</h5>
                            <div className="fakeHR" />
                            <p>Imprint’s identity was based on total flexibility of use. The “i” logo mark, well, it stands for Imprint but it’s also a great window for incorporating images, animations, video, or whatever multimedia case that could be needed. </p>
                            <p>The flexibility of use was just what Imprint was looking for, not only as a screen printing business, but also a web and print design studio. They covered all their bases on the multi-service front, and this identity package helps them continue to do that.</p>
                        </section>
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
