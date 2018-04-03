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
                            <img src={Icon1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <div className="smallImgsRight">
                                <img src={Icon2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                                <img src={Icon3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            </div>
                        </section>
                        <section className="imageGalleryBottom">
                            <img src={Icon4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <div className="smallImgsRight">
                                <img src={Icon5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                            </div>
                        </section>
                    </div>
                    <section className="description">
                        <h3>Icon Construction Grid</h3>
                        <h5>UI/UX, System Design</h5>
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