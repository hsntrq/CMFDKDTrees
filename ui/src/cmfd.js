import React, { Component } from "react";

export default class Cmfd extends Component {
    constructor(props) {
        super(props);
        this.state = {
          check:false,
          i: 0,
        };
      }
      checkfeature(check) {
        check = !check;
        this.setState({
          check: check
        });
        
        if (check) {
          document.getElementById("submitButton").style.display = "block";
          document.getElementById("submitButton").style.opacity="1";
          document.getElementById("submitButton").style.cursor="default";
        } else {
          document.getElementById("submitButton").style.display = "none";
          document.getElementById("submitButton").style.opacity="0.4";
          document.getElementById("submitButton").style.cursor="not-allowed";

        //   $("#pkg4").prop("checked", true);
        }
      }
      postData(e) {
        // alert('You are about to submit the image to apply forgery detection on it!');
        e.preventDefault();
        const data = new FormData(e.target);
        console.log("error!");
        fetch("http://127.0.0.1:8000/api/submit/", {
          method: "POST",
          body: data,
          encType: "multipart/form-data",
        }).then((response) => {
          if (response.status == 201)
            return response.json().then((data) => {
              if (data) this.setState({i:1});
              else alert("wrong data");
            });
        });
      }
  render() {
    return (
      <div>
        <main className="page project-page">
          <section className="portfolio-block project">
            <div className="heading">
              <h2>Copy Move Forgery Detection</h2>
            </div>
            {this.state.i == 0 && <div className="container">
        <p className="text-center">
          To detect copy move forgery in your image, upload your image below:
        </p>
        <div className="row gallery">
          <div className="col" style={{ margin: "0 10%" }}>
            <form onSubmit={this.postData}>
              <div className="dashed_upload"></div>
              <label>Alpha:</label>
              <input className="form-control" type="text" />
              <label style={{ margin: "5px 0px" }}>BlockSize:</label>
              <input className="form-control" type="text" />
              <label style={{ margin: "5px 0px" }}>Tm:</label>
              <input className="form-control" type="text" />
              <div className="form-check" style={{ margin: "5px 0px" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="formCheck-1"
                  onChange={this.checkfeature.bind(this, this.state.check)}
                />
                <label className="form-check-label" htmlFor="formCheck-1">
                  I permit to let my picture be saved in the picture library
                </label>
              </div>
              <div className="form-row">
                <div className="col" style={{ margin: "6px" }}>
                  <button
                    className="btn btn-primary d-flex m-auto"
                    type="submit"
                    style={{ textAlign: "center", cursor:"not-allowed", opacity:"0.4"}}
                    id="submitButton"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div className="wrapper">
              <div className="drop">
                <div className="cont">
                  <i className="fa fa-upload"></i>
                  <div className="tit">Drag & Drop</div>
                  <div className="desc">or</div>
                  <div className="browse">click here to browse</div>
                </div>
                <output id="list"></output>
                <input id="files" multiple name="files[]" type="file" />
              </div>
            </div>
            <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

            <script src="js/index.js"></script>
          </div>
        </div>
      </div>
    }
            {this.state.i == 1 && <Submit />}
            {this.state.i == 2 && <Output />}
          </section>
        </main>
      </div>
    );
  }
  
//   Form() {
//     return (
//       );
//   }
  
 
}


  function Submit() {
    return (
      <div className="container" style={{ margin: "10% auto" }}>
        <div className="row justify-content-center">
          <div
            className="col-auto align-self-center"
            style={{ color: "var(--success)" }}
          >
            <i
              className="fa fa-check-circle fas fa-lg"
              style={{ fontSize: "50px" }}
            ></i>
          </div>
          <div className="col-auto">
            <h1>Submitted</h1>
          </div>
        </div>
        <p style={{ textAlign: "center", margin: "20px 0", fontSize: "21px" }}>
          Your image is being processed to detect the forgery. Please wait for a
          few seconds while we process your image.
        </p>
      </div>
    );
  }
  function Output() {
    let i = 0;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <h6>Input and Output Image of Forgery Detection</h6>
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
            <a
              className="btn btn-primary btn-lg"
              role="button"
              style={{ margin: "10%" }}
              href="/cmfd"
            ></a>
          </div>
        </div>
      </div>
    );
  }