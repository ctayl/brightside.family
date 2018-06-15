import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home"
import Footer from "./components/Footer"
import Landing from "./components/Landing/Landing"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';

class App extends Component {
   render() {
      return (
         <div>
            <Navbar />
            <Router>
               <div id="main">
                  <Route exact path="/" render={() => <Landing />} />
                  <Route exact path="/home" render={() => <Home />} />
               </div>
            </Router>
            <Footer/>
         </div>
      );
   }
}

export default App;
