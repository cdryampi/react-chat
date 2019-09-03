import React, { Component } from 'react';
import { render } from 'react-dom';
import "./custom.css";
import logo from"./img/smartiot.png"

class App extends Component {
  render(){
    return (
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top main-nav pl-5 pr-5">
          <a className="navbar-brand" href="#">
              <img src={logo} id="logo-menu" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto ">
                  <li className="nav-item active">
                      <a className="nav-link text-uppercase text-primary" href="#">Home
                            <span className="sr-only">(current)</span>
                          </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link text-uppercase text-primary" href="#">About</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link text-uppercase text-primary" href="#">Services</a>
                  </li>
                  <li className="nav-item ">
                      <a className="nav-link text-uppercase text-primary" href="#">Contact</a>
                  </li>
              </ul>
          </div>

  </nav>

  <div className="container">
    <div className="row">
        <div className="container mb-5">
            <h3 className=" text-center mt-5">Messaging</h3>
            <div className="messaging">
            </div>
                </div>
            </div>
      </div>
      </div>      
    )
  }
}


render(
  <App/>,
  document.getElementById('app')
)

