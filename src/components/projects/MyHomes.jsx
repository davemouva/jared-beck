import React, { Component } from 'react';
import HeaderNav from '../HeaderNav.jsx';
import Footer from '../Footer.jsx';
import BackArrow from '../../img/back-arrow.png';
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import MyHomes1 from '../../img/MyHomes/Myhomes1.jpg';
import MyHomes2 from '../../img/MyHomes/Myhomes2.jpg';
import MyHomes3 from '../../img/MyHomes/Myhomes3.jpg';
import MyHomes4 from '../../img/MyHomes/Myhomes4.jpg';
import MyHomes5 from '../../img/MyHomes/Myhomes5.jpg';
import MyHomes6 from '../../img/MyHomes/Myhomes6.jpg';

const images = [
    MyHomes1,
    MyHomes2,
    MyHomes3,
    MyHomes4,
    MyHomes5,
    MyHomes6,
];

export default class MyHomes extends Component {
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
                            <img src={MyHomes1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={MyHomes2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={MyHomes3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={MyHomes4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={MyHomes5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                            <img src={MyHomes6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                        </section>
                        <section className="description">
                            <h3>My Homes, Homes.com</h3>
                            <h5>UI/UX</h5>
                            <h5 className="projDate">Nov, 2009</h5>
                            <div className="fakeHR" />
                            <p>UI design lead on this project for Homes.com. MyHomes was created as a collaborative space between home buyers and real estate agents, and everybody else in between. We wanted to take some of the “process” out of the home buying process. MyHomes helps to foster an atmosphere that made the experience of buying a home more symbiotic, more organized, and just more fun.  </p>
                            <p>Work for Vigil included some identity and logo design, some packaging for the product, and also some apparel goodies. A local business based out of Norfolk, Va. with a small load of product to push, and a shit load of heart. </p>
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
