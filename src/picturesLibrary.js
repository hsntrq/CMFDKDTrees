import React, { Component } from "react";

export default class PicturesLibrary extends Component {
  render() {
    return (
      <div>
        <main className="page projects-page">
        <section className="portfolio-block projects-cards">
            <div className="container">
                <div className="heading">
                    <h2>Pictures with their Forgery Detected Outputs</h2>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <div className="card border-0">
                            <div className="card-body">
                                <h6><a href="#">Picture 1</a></h6>
                                <p className="text-muted card-text">For this image, alpha = 10, blocksize = 9, tm = 0.001</p>
                                <div className="row">
                                    <div className="col-6"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/nature/4.jpeg" alt="Card Image"/></a></div>
                                    <div className="col-6"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/nature/4a.jpeg" alt="Card Image"/></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="card border-0">
                            <div className="card-body">
                                <h6><a href="#">Picture 2</a></h6>
                                <p className="text-muted card-text">For this image, alpha = 10, blocksize = 9, tm = 0.001</p>
                                <div className="row">
                                    <div className="col-6"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/nature/3.jpeg" alt="Card Image"/></a></div>
                                    <div className="col-6"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/nature/3a.jpeg" alt="Card Image"/></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="card border-0">
                            <div className="card-body">
                                <h6><a href="#">Picture 3</a></h6>
                                <p className="text-muted card-text">For this image, alpha = 10, blocksize = 9, tm = 0.001</p>
                                <div className="row">
                                    <div className="col-6"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/nature/2.jpeg" alt="Card Image"/></a></div>
                                    <div className="col-6"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/nature/2a.jpeg" alt="Card Image"/></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="card border-0">
                            <div className="card-body">
                                <h6><a href="#">Picture 4</a></h6>
                                <p className="text-muted card-text">For this image, alpha = 10, blocksize = 9, tm = 0.001<br/></p>
                                <div className="row">
                                    <div className="col-6"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/nature/1.jpeg" alt="Card Image"/></a></div>
                                    <div className="col-6"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/nature/1a.jpeg" alt="Card Image"/></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
    );
  }
}
