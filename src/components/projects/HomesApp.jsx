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
                            <img src={HomesApp1} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                            <img src={HomesApp5} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                            <img src={HomesApp3} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                            <img src={HomesApp4} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                            <img src={HomesApp2} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                            <img src={HomesApp6} alt="" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                        </section>
                        <section className="description">
                            <h3>iOS App, Homes.com</h3>
                            <h5>UI/UX</h5>
                            <h5>Nov, 2009</h5>
                            <div className="fakeHR" />
                            <p>UI design lead on the Homes.com native iOS app. The app redesign came shortly after a redesign of Homes.com’s web experience and we wanted the app to reflect that as well as embrace the UI elements familiar and intuitive to the iOS user. The app takes advantage of both the native UI of iOS and blends it with the design that is reflective of the Homes.com personality.</p>
                            <p>The result is an app that provides an air of both reliability and familiarity. Pair off between the Homes.com web experience and the app experience and enjoy the frictionless transition between the two, all while incorporating what you’ve come to love and understand about your iphone.</p>
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
