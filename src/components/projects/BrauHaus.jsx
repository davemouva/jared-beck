import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';


// import Brau from '../../img/Brau/brau.png';
import Brau1 from '../../img/Brau/Brau1.gif';
import Brau2 from '../../img/Brau/Brau2.jpg';
import Brau3 from '../../img/Brau/Brau3.jpg';
import Brau4 from '../../img/Brau/Brau4.jpg';
import Brau5 from '../../img/Brau/Brau5.jpg';
import Brau6 from '../../img/Brau/Brau6.jpg';

const images = [
    Brau1,
    Brau2,
    Brau3,
    Brau4,
    Brau5,
    Brau6
];

export default class BrauHaus extends Component {
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
                            <img src={Brau1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Brau2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Brau3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Brau4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={Brau5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                            <img src={Brau6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                        </section>

                        <section className="description">
                            <h3>Brau Haus Brewing</h3>
                            <h5>Branding, Identity, Packaging</h5>
                            <h5>Nov, 2009</h5>
                            <div className="fakeHR" />
                            <p>Brau Haus is the microbrewery chillin on the corner that all the other breweries wish they could be. Brau Haus packs a snarky attitude and a genuine love for puns. Try the "BRAU F!@*KIN' DOWN" or maybe the "BRAU YOU DOIN'?" or maybe even the new German Witbeir "MEIN BRAULEIN."</p>
                            <p>But really, Brau Haus packs slick design, packaging, and a just hip enough attitude that puts it above the competition. The catchy beer names are just extra credit.</p>
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

