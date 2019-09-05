import React, { Component } from 'react';
import { render } from 'react-dom';
import "./custom.css";
import logo from"./img/smartiot.png"

//componentes
import ChatRoom from './components/ChatRoom'
import Header from './components/Header'


class App extends Component {

    render(){
    return (

  
      <div className="container">
        <Header/>

  <div className="container">
    <div className="row mt-5">
        <div className="container mt-5">
            <h3 className=" text-center mt-5 text-info">Bienvenido al SmartIoT Chat</h3>
            <div className="messaging">
              {/* Render de la ChatRoom.js */}
              <ChatRoom/>
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

