import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import Lightbox from 'react-image-lightbox';

import Grow1 from '../../img/Grow/Grow1.gif';
import Grow2 from '../../img/Grow/Grow2.png';
import Grow3 from '../../img/Grow/Grow3.png';
import Grow4 from '../../img/Grow/Grow4.png';
import Grow5 from '../../img/Grow/Grow5.jpg';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";

const images = [
    Grow1,
    Grow2,
    Grow3,
    Grow4,
    Grow5
];


export default class Groweather extends Component {
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
                            <img src={Grow1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <div className="smallImgsRight">
                                <img src={Grow2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                                <img src={Grow3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            </div>
                        </section>
                        <section className="imageGalleryBottom">
                            <img src={Grow4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <div className="smallImgsRight">
                                <img src={Grow5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                            </div>
                        </section>
                    </div>
                    <section className="description">
                        <h3>Groweather</h3>
                        <h5>UI/UX, Identity, Branding</h5>
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
