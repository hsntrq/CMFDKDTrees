import React, { Component } from "react";

export default class KDTree extends Component {
  render() {
    return (
      <div>
        <main className="page contact-page">
          <section className="portfolio-block contact">
            <div className="container">
              <h1>More About KD Trees:</h1>
              <p>
                Using a KD-Tree we can consider K-dimensional feature vectors as
                coordinates in K-Dimensional space. A KD-Tree partitions this KD
                space based on the points input into it. In terms of
                implementation, we input tuples of feature vectors into a binary
                tree, where each level is designated a dimension, e.g. in 2d
                trees, first level is x, second is y, and third again is x, and
                so on. The points at each level partition the space in the axis
                of the dimension of the level.
              </p>
              <h1>Balancing KD Trees and Complexity:</h1>
              <p>
                To get balanced trees, use the median coordinate for splitting -
                median itself can be put in either half or Presort points by x
                and y-coordinates, and cross-link these two sorted lists. <br/> With
                median splitting, the height of the tree guaranteed to be O(log
                n). 
                <br/>Inserting a new point into a balanced k-d tree takes O(log
                n) time. 
                <br/>Removing a point from a balanced k-d tree takes O(log
                n) time. 
                <br/>Finding 1 nearest neighbor in a balanced k-d tree with
                randomly distributed points takes O(log n) time on average.
              </p>
              <img src ="/assets/img/KDtree2.png" />
              <img src ="/assets/img/KDtree.png" />
            </div>
          </section>
        </main>
      </div>
    );
  }
}
