import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (<>
      <footer className="page-footer">
        <div className="container">
            <div className="links"><a href="#">About Us</a></div>
            <div className="social-icons"><a href="https://github.com/hsntrq/CMFDKDTrees"><i className="icon ion-social-github"></i></a><a href="#"><i className="icon ion-social-youtube"></i></a></div>
        </div>
    </footer>   
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/pikaday.min.js"></script>
    <script src="assets/js/Paralax-Hero-Banner.js"></script>
    <script src="assets/js/theme.js"></script>
    <script src="assets/js/WOWSlider-about-us.js"></script>
    </>
      )
  }
}