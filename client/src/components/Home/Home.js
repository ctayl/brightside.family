import React, { Component } from "react";
import "./Home.css";

class Home extends Component {

   render() {

      return (
         <div id="main">
            <div className="container">
               <div className="row">
                  <div className="col-md">
                     <div class="jumbotron" id="about">
                        <h1 className="display-4">About BrightSide</h1>
                        <p className="lead">We speciallize in providing fair and compassionate Supervised Visitation Monitoring.</p>
                        <hr className="my-4"/>
                           <p>Here is some other important statement.</p>
                           <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            )
         }
      }
      
export default Home;