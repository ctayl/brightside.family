import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {

   render() {

      return (
         <div>
            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="d-block w-100" src="http://via.placeholder.com/800x400" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src="http://via.placeholder.com/800x400" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src="http://via.placeholder.com/800x400" alt="Third slide" />
                  </div>
               </div>
               <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
               </a>
               <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
               </a>
            </div> */}
            <div className="hero-image">
               <div className="hero-text">
                  <h1 class="display-4">Welcome to BrightSide Visitation!</h1>

               </div>
            </div>
            {/* <img src="http://via.placeholder.com/1200x800" class="img-fluid" alt="Responsive image" /> */}
            {/* <div className="container-fluid">
               <div className="row">
                  <div className="col-md">

                  </div>
               </div>
            </div>
         </div> */}
         </div>
      )
   }
}

export default Landing;