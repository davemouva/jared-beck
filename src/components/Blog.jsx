import React, { Component } from 'react';
import HeaderNav from './HeaderNav.jsx';
import Footer from './Footer.jsx';


export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      hjposts: []
    }
  }
  componentDidMount() {
    let dataURL = "http://localhost:8888/wp-json/wp/v2/hjpost?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          hjposts: res
        })
      })
  }
  render() {
    let movies = this.state.hjposts.map((hjpost, index) => {
      return <div key={index}>
        <img src={hjpost.acf.image.url} alt="" />
        <p><strong>Title:</strong> {hjpost.title.rendered}</p>
        <p><strong>Date:</strong> {hjpost.acf.date}</p>
        <p><strong>Description:</strong>
          <div dangerouslySetInnerHTML={{ __html: hjpost.content.rendered }} />
        </p>

      </div>
    });

    return (
      <div>
        <HeaderNav />
        <h2>This is my blog page</h2>
        {movies}
        <Footer />
      </div>
    );
  }
};
