import React, { Component } from 'react';
import logo from"../img/smartiot.png"

// Components
import Login from './Login'
class Header extends Component {

        
        

 
    render(){
        return(
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
                  {/* Redireccionar a una página en donde se explicar el funciomiento de la web (usar JS para que se simule una conversación) */}
                    <a className="nav-link text-uppercase text-info" href="#">Inicio
                          <span className="sr-only">(current)</span>
                        </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-uppercase text-info" href="#">Tema</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-uppercase text-info" href="#">Configuración</a>
                </li>
                <Login/>
            </ul>
        </div>
        
        </nav>
    )
}
}

export default Header