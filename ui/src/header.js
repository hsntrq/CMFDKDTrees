import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (<div>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div className="container"><a className="navbar-brand logo" href="/">{'Sibling Functions'}</a>
            <nav className="navbar navbar-light navbar-expand-md">
                <div className="container-fluid"><button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
            </nav>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className={(window.location.href.search("/visualize")!=-1 && "active")+" nav-link"} href="/visualize">KD Trees</a></li>
                    <li className="nav-item"><a className={(window.location.href.search("/cmfd")!=-1 && "active")+" nav-link"} href="/cmfd">Copy Move Forgery Detection</a></li>
                    <li className="nav-item"><a className={(window.location.href.search("/pictures")!=-1 && "active")+" nav-link"} href="/pictures">Pictures Library</a></li>
                    <li className="nav-item"><a className={(window.location.href.search("/art")!=-1 && "active")+" nav-link"} href="/art">Generative Art</a></li>
                    <li className="nav-item"><a className={(window.location.href.search("/about")!=-1 && "active")+" nav-link"} href="/about">About Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
      )
  }
}
