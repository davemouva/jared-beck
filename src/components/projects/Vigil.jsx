import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import Vigil1 from '../../img/Vigil/Vigil1.jpg';
import Vigil2 from '../../img/Vigil/Vigil2.jpg';
import Vigil3 from '../../img/Vigil/Vigil3.jpg';
import Vigil4 from '../../img/Vigil/Vigil4.jpg';
import Vigil5 from '../../img/Vigil/Vigil5.jpg';
import Vigil6 from '../../img/Vigil/Vigil6.jpg';

const images = [
    Vigil1,
    Vigil2,
    Vigil3,
    Vigil4,
    Vigil5,
    Vigil6
];

export default class Vigil extends Component {
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
                            <img src={Vigil1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Vigil2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Vigil3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Vigil4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={Vigil5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                            <img src={Vigil6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                        </section>
                        <section className="description">
                            <h3>Vigil Candle Co.</h3>
                            <h5>Branding / Illustration / Product</h5>
                            <h5 className="projDate">Winter 2016</h5>
                            <div className="fakeHR" />
                            <p>Vigil Candle Company has a vibe to them inspired by Late Gothic and Renaissance aesthetic, mixed with a little bit of punk rock and little bit of vintage americana, rounded out with a little bit of “I’ll kick you in your teeth, but it’s ironic cause we make candles.” (That’s how irony works right?) </p>
                            <p>Work for Vigil included some identity and logo design, some packaging for the product, and also some apparel goodies. A local business based out of Norfolk, Va. with a small load of product to push, and a shit load of heart. </p>
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
