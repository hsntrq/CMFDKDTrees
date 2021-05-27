import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <main className="page lanidng-page">
          <section className="portfolio-block block-intro">
            <div
              className="jumbotron hero-technology"
              style={{ margin: "-104px 0px" }}
            >
              <h1 className="hero-title">KD Trees</h1>
              <p className="hero-subtitle">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
              <p></p>
              <a className="btn btn-primary" role="button" href="/visualize">
                Visualize KD Tree Now
              </a>
            </div>
          </section>
          <section className="portfolio-block website">
            <div
              className="container"
              style={{ background: "rgba(52,58,64,0.67)" }}
            >
              <div className="heading">
                <h2 style={{ borderColor: "#000000" }}>
                  Copy Move Forgery Detection
                </h2>
              </div>
              <div className="row">
                <div className="col-sm-12 col-lg-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <h6>
                        <a href="#">Picture 1</a>
                      </h6>
                      <p className="text-muted card-text">
                        For this image, alpha = 10, blocksize = 9, tm = 0.001
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <a href="#">
                            <img
                              className="card-img-top scale-on-hover"
                              src="assets/img/nature/image1.jpg"
                              alt="Card Image"
                            />
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#">
                            <img
                              className="card-img-top scale-on-hover"
                              src="assets/img/nature/image1.jpg"
                              alt="Card Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-8">
                  <div className="card border-0"></div>
                  <p>
                    The algorithm uses KD Trees to detect the forgery in the
                    image your upload. It will generate and provide you with an
                    output image having the forgery detected in it. You can
                    access the tool by clicking below:
                  </p>
                  <a
                    className="btn btn-primary btn-lg"
                    role="button"
                    style={{ margin: "10%" }}
                    href="/cmfd"
                  >
                    Access the Tool Now
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            className="portfolio-block website"
            style={{
              backgroundImage:
                "url(&quot;https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg&quot;) center / contain no-repeat",
            }}
          >
            <div className="container">
              <div className="heading">
                <h2>Pictures with There Forgery Detected Outputs</h2>
              </div>
              <div>
                <p>
                  The output pictures of the images that are saved in our
                  library.
                </p>
              </div>
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <div className="card border-0">
                    <div className="card-body">
                      <h6>
                        <a href="#">Picture 1</a>
                      </h6>
                      <p className="text-muted card-text">
                        For this image, alpha = 10, blocksize = 9, tm = 0.001
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <a href="#">
                            <img
                              className="card-img-top scale-on-hover"
                              src="assets/img/nature/image1.jpg"
                              alt="Card Image"
                            />
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#">
                            <img
                              className="card-img-top scale-on-hover"
                              src="assets/img/nature/image1.jpg"
                              alt="Card Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="card border-0">
                    <div className="card-body">
                      <h6>
                        <a href="#">Picture 2</a>
                      </h6>
                      <p className="text-muted card-text">
                        For this image, alpha = 10, blocksize = 9, tm = 0.001
                        <br />
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <a href="#">
                            <img
                              className="card-img-top scale-on-hover"
                              src="assets/img/nature/image1.jpg"
                              alt="Card Image"
                            />
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#">
                            <img
                              className="card-img-top scale-on-hover"
                              src="assets/img/nature/image1.jpg"
                              alt="Card Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <a
                    className="btn btn-primary btn-lg"
                    role="button"
                    style={{ margin: "20px" }}
                    href="/pictures"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="portfolio-block website">
            <div
              className="container"
              style={{ background: "rgba(248,249,250,0.19)" }}
            >
              <div className="heading">
                <h2>Generative Art Using KD Trees</h2>
              </div>
              <div>
                <p>
                  The output pictures of the images that are saved in our
                  library.
                </p>
              </div>
              <div className="row" style={{ margin: "30px 0px" }}>
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0">
                    <a href="#">
                      <img
                        className="card-img-top scale-on-hover"
                        src="assets/img/Generative_Art_1.jpeg"
                        alt="Card Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0">
                    <a href="#">
                      <img
                        className="card-img-top scale-on-hover"
                        src="assets/img/Generative_Art_2.jpeg"
                        alt="Card Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0">
                    <a href="#">
                      <img
                        className="card-img-top scale-on-hover"
                        src="assets/img/Generative_Art_4.jpeg"
                        alt="Card Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0">
                    <a href="#"></a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0">
                    <a href="#"></a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <a
                    className="btn btn-primary btn-lg"
                    role="button"
                    style={{ margin: "20px" }}
                    href="/visualize"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
