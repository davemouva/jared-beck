import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import Space1 from '../../img/Space/Space1.jpg';
import Space2 from '../../img/Space/Space2.jpg';
import Space3 from '../../img/Space/Space3.jpg';
import Space4 from '../../img/Space/Space4.jpg';
import Space5 from '../../img/Space/Space5.jpg';

const images = [
    Space1,
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
    render() {
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
                            <img src={Space1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Space2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Space3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Space4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={Space5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                        </section>
                        <section className="description">
                            <h3>Space Age</h3>
                            <h5>Web Development, Illustration</h5>
                            <h5>Nov, 2009</h5>
                            <div className="fakeHR" />
                            <p>This is a whole bunch of nonsense about this particular project.</p>
                            <p>Visit my shop and blog to view my personal work, adventures, and exploits.</p>
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
                        imagePadding={100}
                    />
                )}
            </div>
        );
    }
};
