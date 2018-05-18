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
    // let dataURL = "http://davemoral.es/hjblog/wp-json/wp/v2/hjposts?_embed";
    let dataURL = "http://hellojared.com/hjblog/wp-json/wp/v2/hjposts?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          hjposts: res
        })
      })
  }
  render() {
    let posts = this.state.hjposts.map((hjpost, index) => {
      return <div key={index}>
        <p className="postTitle">{hjpost.title.rendered}</p>
        <p className="postDate">{hjpost.acf.date}</p>
        <p className="postContent"><div dangerouslySetInnerHTML={{ __html: hjpost.content.rendered }} /></p>
        <div className="horizRule"></div>

      </div>
    });

    return (
      <div className="outerBlog">
        <HeaderNav />
        <div className="blogContent">
          {posts}
        </div>
        <Footer />
      </div>
    );
  }
};
