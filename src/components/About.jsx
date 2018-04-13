import React, { Component } from 'react';
import HeaderNav from './HeaderNav.jsx';
import Footer from './Footer.jsx';


export default class About extends Component {
    render() {
        return (
            <div className="outerAbout">
                <HeaderNav />
                <div className="aboutCont">
                    <section className="imageGallery">
                        <img src="http://via.placeholder.com/300x150" alt="placeholder" />
                        <img src="http://via.placeholder.com/300x150" alt="placeholder" />
                        <img src="http://via.placeholder.com/300x150" alt="placeholder" />
                    </section>
                    <section className="description">
                        <h3>Jared Beck</h3>
                        <h5>Likes: Math Rock, Baby Goats, Documentaries</h5>
                        <h5>Dislikes: Actual Math, Dirty Fingernails, Ketchup</h5>
                        <div className="fakeHR"/>
                        <p>My name's Jared, a graphic designer based out of Norfolk,VA. When not on my computer I enjoy cooking, movies, and the occasional outdoor experience. Some of my isms include: popcorn mixed with raisinets, deep-seated aversion to ketchup, math-rock lover, dirty-shoe enthusiast, and lactose intolerance.</p>
                        <p>Visit my shop and blog to view my personal work, adventures, and exploits.</p>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
};
