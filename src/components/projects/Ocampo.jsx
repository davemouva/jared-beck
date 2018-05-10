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

    componentDidMount() {
        window.scrollTo(0, 0)
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
                <div className="backArrow">
                    <Link to="/portfolio">
                        <img src={BackArrow} alt="Back to Portfolio" />
                    </Link>
                </div>
                <div className="projectPage">
                    <div className="projectContainer">
                        <section className="galleryContainer">
                            <img src={Ocampo1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Ocampo2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Ocampo3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Ocampo4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={Ocampo5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                            <img src={Ocampo6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                        </section>
                        <section className="description">
                            <h3>Ocampo Wedding, Enamel Pins</h3>
                            <h5>Illustration / Product / Packaging</h5>
                            <h5 className="projDate">Summer 2016</h5>
                            <div className="fakeHR" />
                            <p>My sister and brother-in-law asked me to help them design these enamel pins for their wedding. Their idea was to take the characteristics of themselves and their wedding and create wedding favors out of them. Really, a cool idea I was excited to be a part of.</p>
                            <p>The fountain pin is representative of where their ceremony took place, a little park called Libby Hill in Richmond, Va. The hotel where their ceremony took place is an awesome Wes Anderson-esque spot called Quirk Hotel, and that cute little frenchie there is my nephew Beaux.</p>
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
