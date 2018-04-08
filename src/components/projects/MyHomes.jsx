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
