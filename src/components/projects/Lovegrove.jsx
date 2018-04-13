import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import Lovegrove1 from '../../img/Lovegrove/Lovegrove1.jpg';
import Lovegrove2 from '../../img/Lovegrove/Lovegrove2.png';
import Lovegrove3 from '../../img/Lovegrove/Lovegrove3.jpg';
import Lovegrove4 from '../../img/Lovegrove/Lovegrove4.jpg';
import Lovegrove5 from '../../img/Lovegrove/Lovegrove5.jpg';
import Lovegrove6 from '../../img/Lovegrove/Lovegrove6.jpg';

const images = [
    Lovegrove1,
    Lovegrove2,
    Lovegrove3,
    Lovegrove4,
    Lovegrove5,
    Lovegrove6,
];

export default class Lovegrove extends Component {
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
                            <img src={Lovegrove1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Lovegrove2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Lovegrove3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Lovegrove4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={Lovegrove5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                            <img src={Lovegrove6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                        </section>
                        <section className="description">
                            <h3>Ross Lovegrove, Website</h3>
                            <h5>Web Development</h5>
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
