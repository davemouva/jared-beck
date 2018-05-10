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
                <div className="projectPage short">
                    <div className="projectContainer">
                        <section className="galleryContainer">
                            <img src={Bod1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={Bod2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={Bod3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={Bod4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                        </section>
                        <section className="description">
                            <h3>Bodacious Pizza</h3>
                            <h5>Branding / Product</h5>
                            <h5 className="projDate">Summer 2017</h5>
                            <div className="fakeHR" />
                            <p>Logo and type created for Bodacious Pizza. Bodacious is a food truck operating in and around the Hampton Roads area of Virginia. This logo reflects on the mobility of their tasty pies, and the brick oven in which they're created.</p>
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
                        imagePadding={numberSetter}
                    />
                )}

            </div>
        );
    }
};
