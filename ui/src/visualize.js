import React, { Component } from "react";

export default class Visualize extends Component {
  render() {
    return (
      <div>
        <main className="page contact-page">
          <section className="portfolio-block contact">
            <div className="container">
              <h1>More About KD Trees:</h1>
              <p>KD Trees are a type of Data structure etc etc..</p>
            </div>
          </section>
          <section>
            <div className="container">
              <h1>Visualize KD Tree below:</h1>
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <div className="card border-0">
                    <div className="card-body">
                      <h6>
                        <a href="#">Picture 1</a>
                      </h6>
                      <div className="row">
                        <div className="col-6">
                          <a href="#"></a>
                        </div>
                        <div className="col-6">
                          <a href="#"></a>
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
                      <div className="row">
                        <div className="col-6">
                          <a href="#"></a>
                        </div>
                        <div className="col-6">
                          <a href="#"></a>
                        </div>
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
