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
                            <img src={Imprint1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <div className="smallImgsRight">
                                <img src={Imprint2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                                <img src={Imprint3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            </div>
                        </section>
                        <section className="imageGalleryBottom">
                            <img src={Imprint4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <div className="smallImgsRight">
                                <img src={Imprint5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                                <img src={Imprint6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                            </div>
                        </section>
                    </div>
                    <section className="description">
                        <h3>Imprint</h3>
                        <h5>Multimedia, Branding, Identity</h5>
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
