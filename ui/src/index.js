import React from "react";
import ReactDOM from "react-dom";

import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import About from "./about";
import Cmfd from "./cmfd";
import PicturesLibrary from "./picturesLibrary";
import GenerativeArt from "./generativeArt";
import KDTree from "./kdtree";
import reportWebVitals from "./reportWebVitals";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cmfd" component={Cmfd} />
        <Route exact path="/art" component={GenerativeArt} />
        <Route exact path="/kdtrees" component={KDTree} />
        <Route exact path="/pictures" component={PicturesLibrary} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
