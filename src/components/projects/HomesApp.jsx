import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';


import HomesApp1 from '../../img/App/App1.jpg';
import HomesApp2 from '../../img/App/App2.jpg';
import HomesApp3 from '../../img/App/App3.jpg';
import HomesApp4 from '../../img/App/App4.jpg';
import HomesApp5 from '../../img/App/App5.jpg';
import HomesApp6 from '../../img/App/App6.jpg';

const images = [
    HomesApp1,
    HomesApp2,
    HomesApp3,
    HomesApp4,
    HomesApp5,
    HomesApp6
];

export default class HomesApp extends Component {
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
                            <img src={HomesApp1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <div className="smallImgsRight">
                                <img src={HomesApp5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                                <img src={HomesApp3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            </div>
                        </section>
                        <section className="imageGalleryBottom">
                            <img src={HomesApp4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <div className="smallImgsRight">
                                <img src={HomesApp2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                                <img src={HomesApp6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                            </div>
                        </section>
                    </div>
                    <section className="description">
                        <h3>iOS App, Homes.com</h3>
                        <h5>UI/UX</h5>
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
