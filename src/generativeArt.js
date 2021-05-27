import React, { Component } from "react";

export default class GenerativeArt extends Component {
  render() {
    return (
      <div>
        <main className="page projets-page">
        <section className="portfolio-block projects compact-grid">
            <div className="container">
                <h2 className="text-center"><strong>Generative Art Using KD Trees</strong></h2>
                <p style={{margin: "40px 14px"}}>Math Art and ggplot library of R programming language have been used to generate art and images. The following general strategy is used to make the images we have featured in the gallery below.
<ol>
<li>Generating 2-D points randomly or mapping them onto some equation.</li>
<li>Making a KD Tree of those points. </li>
<li>Getting the end points corresponding a point (x,y). </li>
<li>Tweaking the parameters according to the art style. </li>
<li>Plotting them with artsy techniques, colours, linetypes, sizes etc. </li>
</ol>
<br/>There are two images of Rapidly-exploring random trees which are extension of KD-Trees since they are two dimensional but their construction is completely randomized and different.  RRT grows a tree rooted at the starting configuration by using random samples from the search space. As each sample is drawn, a connection is attempted between it and the nearest state in the tree. The built in functions of mathArt library nearly accomplish all of that by generating the search space. The images featured in blue are examples of RRT Art.
<br/>References: https://towardsdatascience.com/getting-started-with-generative-art-in-r-3bc50067d34b

</p>
                <div className="row" style={{margin: "30px 0px"}}>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/Generative_Art_1.jpeg" alt="Card Image"/></a>
                            <div className="card-body">
                                <h6></h6>
                                <p className="text-muted card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/Generative_Art_2.jpeg" alt="Card Image"/></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/Generative_Art_4.jpeg" alt="Card Image"/></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/Generative_Art_6.jpeg" alt="Card Image"/></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/ellipse.jpeg" alt="Card Image"/></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div><img className="card-img-top scale-on-hover" src="assets/img/Generative_Art_9.jpeg" alt="Card Image"/>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/Generative_Art_10.jpeg" alt="Card Image"/></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/Generative_Art_8.jpeg" alt="Card Image"/></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="assets/img/Generative_Art_7.jpeg" alt="Card Image"/></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"></a>
                            <div className="card-body">
                                <h6></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heading"></div>
        </section>
    </main>
        </div>
    );
  }
}
