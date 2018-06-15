import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
   render() {
      return (
         <div id="footer-custom">
            <nav className="navbar fixed-bottom navbar-dark bg-dark">
               <p className="text-center" id="footer-text">&copy;Brightside Visitation</p>
            </nav>
         </div>
      )
   }
};

export default Footer;