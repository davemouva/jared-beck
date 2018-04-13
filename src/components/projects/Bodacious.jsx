import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';


import Bod1 from '../../img/Bodacious/Bodacious1.jpg';
import Bod2 from '../../img/Bodacious/Bodacious2.png';
import Bod3 from '../../img/Bodacious/Bodacious3.png';
import Bod4 from '../../img/Bodacious/Bodacious4.png';

const images = [
    Bod1,
    Bod2,
    Bod3,
    Bod4
];

export default class Bodacious extends Component {
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
                            <img src={Bod1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Bod2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Bod3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Bod4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                        </section>
                        <section className="description">
                            <h3>Bodacious Pizza</h3>
                            <h5>Branding, Identity, Product</h5>
                            <h5>Nov, 2009</h5>
                            <div className="fakeHR" />
                            <p>This is a whole bunch of nonsense about this particular project.</p>
                            <p>Visit my shop and blog to view my personal work, adventures, and exploits.</p>
                        </section>
                    </div>
                </div>
                < Footer />
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
