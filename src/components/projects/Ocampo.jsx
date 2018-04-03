import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import Ocampo1 from '../../img/Ocampo/Ocampo1.jpg';
import Ocampo2 from '../../img/Ocampo/Ocampo2.jpg';
import Ocampo3 from '../../img/Ocampo/Ocampo3.jpg';
import Ocampo4 from '../../img/Ocampo/Ocampo4.jpg';
import Ocampo5 from '../../img/Ocampo/Ocampo5.jpg';
import Ocampo6 from '../../img/Ocampo/Ocampo6.jpg';

const images = [
    Ocampo1,
    Ocampo2,
    Ocampo3,
    Ocampo4,
    Ocampo5,
    Ocampo6,
];

export default class Ocampo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div>
                <HeaderNav />
                <div className="projectPage">
                    <div className="backArrow">
                        <Link to="/portfolio">
                            <img src={BackArrow} alt="Back to Portfolio" />
                        </Link>
                    </div>
                    <div className="outerImageWrapper">
                        <section className="imageGalleryTop">
                            <img src={Ocampo1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <div className="smallImgsRight">
                                <img src={Ocampo2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                                <img src={Ocampo3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            </div>
                        </section>
                        <section className="imageGalleryBottom">
                            <img src={Ocampo4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <div className="smallImgsRight">
                                <img src={Ocampo5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                                <img src={Ocampo6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                            </div>
                        </section>
                    </div>
                    <section className="description">
                        <h3>Ocampo Wedding, Enamel Pins</h3>
                        <h5>Illustration, Packaging, Product</h5>
                        <h5>Nov, 2009</h5>
                        <div className="fakeHR" />
                        <p>This is a whole bunch of nonsense about this particular project.</p>
                        <p>Visit my shop and blog to view my personal work, adventures, and exploits.</p>
                    </section>
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
                        imagePadding={100}
                    />
                )}
            </div>
        );
    }
};
