import React, {Component} from 'react'



class ChatRoom extends Component {
  render(){
    return(
      <div className="inbox_msg mt-5">
      <div className="inbox_people">
          <div className="headind_srch">
              <div className="recent_heading">
                  <h4>En línea</h4>
              </div>
              {/* Input de busqueda de usuarios por nickname */}
              <div className="srch_bar">
                  <div className="stylish-input-group">
                      <input type="text" className="search-bar" placeholder="Buscar"/>
                      <span className="input-group-addon">
                                  <button type="button">
                                     <i className="fa fa-search" aria-hidden="true"></i> 
                                  </button>
                      </span> 
              </div>
              </div>
              {/* fin del input de busqueda de usuarios */}
          </div>
          <div className="inbox_chat">
              <div className="chat_list active_chat">
                  <div className="chat_people">
                      <div className="chat_img"> <img src="http://yampi.cat/chat/yampi.png" alt="sunil"/> </div>
                      <div className="chat_ib">
                          <h5>Yampi <span className="chat_date">Dec 25</span></h5>
                          <p>Realizando test con las imagenes</p>
                      </div>
                  </div>
              </div>
              <div className="chat_list active_chat">
                  <div className="chat_people">
                      <div className="chat_img"> <img src="http://yampi.cat/chat/david.jpg" alt="sunil"/> </div>
                      <div className="chat_ib">
                          <h5>David <span className="chat_date">Dec 25</span></h5>
                          <p>Realizando test con las imagenes</p>
                      </div>
                  </div>
              </div>
              <div className="chat_list active_chat">
                  <div className="chat_people">
                      <div className="chat_img"> <img src="http://yampi.cat/chat/alejandro.jpg" alt="sunil"/> </div>
                      <div className="chat_ib">
                          <h5>Alejandro <span className="chat_date">Dec 25</span></h5>
                          <p>Realizando test con las imagenes</p>
                      </div>
                  </div>
              </div>
              {/* Realizar un bucle para rellenar los div con los usuarios en línea */}
          </div>
          
                    
      </div>
      <div className="mesgs">
        {/*  Bloque de código que muestra el mensaje de Usuario 2 IMPORTANTE => hacer un debug para que no incluir un usuario anonimo */}
          <div className="msg_history">
              <div className="incoming_msg">
                  <div className="incoming_msg_img"> <img src="http://yampi.cat/chat/alejandro.jpg" alt="sunil"/> </div>
                  <div className="received_msg">
                      <div className="received_withd_msg">
                          <p>Testeando la web..import.
                          </p>
                          <span className="time_date"> 11:01 AM    |    June 9</span></div>
                  </div>
              </div>
              {/* Fin de bucle del usuario remitente */}
              <div className="outgoing_msg">
                  <div className="sent_msg">
                      <p>Sin fallos solo cambio de rutas.
                      </p>
                      <span className="time_date"> 11:01 AM    |    June 9</span> </div>
              </div>

          </div>
          {/* DIV que contiene el input para enviar el mensaje. */}
          <div className="type_msg">
              <div className="input_msg_write">
                  <input type="text" className="write_msg" placeholder="Escribe tu mensaje" />
                  <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
              </div>
          </div>
          {/* Fin de la DIV de envio del formulario del mensaje*/}
         
  
      </div>
  </div>
    )
  }
  
}

export default ChatRoom
