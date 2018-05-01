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
                            <img src={Grow1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Grow2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Grow3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Grow4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={Grow5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                        </section>
                        <section className="description">
                            <h3>Groweather</h3>
                            <h5>UI/UX, Identity, Branding</h5>
                            <h5 className="projDate">Nov, 2009</h5>
                            <div className="fakeHR" />
                            <p>Groweather is your little buddy out in the garden. It tells you the weather (obviously) but Groweather also tells you how that weather impacts your gardening regimine. Groweather provides you tips and tricks based on your climate, the season, and through its “patented customizable garden inventory” more specific information based on what it is you're growing.</p>
                            <p>Gardening isn't the easiest thing, but with this powerful little app your black thumb will at least be a like a dark shade of green or something. Beautiful UI, simplified UX, and amazing information to boot.</p>
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
