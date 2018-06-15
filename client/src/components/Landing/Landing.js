import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {

   render() {

      return (
         <div>
            <div className="hero-image">
               <div className="hero-text">
                  <h1 class="display-4">Welcome to BrightSide Visitation!</h1>
                  <a className="btn btn-dark" href="/home" role="button">Learn more</a>
               </div>
            </div>
         </div>
      )
   }
}

export default Landing;