import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="body">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-custom">
          <a className="navbar-brand" href="#">Bright Side Visitation</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div className="container" id="main">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h1 className="display-4">Welcome to Bright Side Visitation!</h1>
                <p className="lead">Here is a mission statement or some other valuable text</p>
                <hr className="my-4"></hr>
                <p>Another line of information here</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;