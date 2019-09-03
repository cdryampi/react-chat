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
                      <input type="text" class="search-bar" placeholder="Buscar"/>
                      <span className="input-group-addon">
                                  <button type="button">
                                     <i class="fa fa-search" aria-hidden="true"></i> 
                                  </button>
                      </span> 
              </div>
              </div>
              {/* fin del input de busqueda de usuarios */}
          </div>
          <div className="inbox_chat">
              <div className="chat_list active_chat">
                  <div className="chat_people">
                      <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                      <div className="chat_ib">
                          <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                          <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                      </div>
                  </div>
              </div>
          {/* Realizar un bucle para rellenar los div con los usuarios en línea */}
          </div>
      </div>
      <div className="mesgs">
        {/*  */}
          <div className="msg_history">
              <div className="incoming_msg">
                  <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                  <div className="received_msg">
                      <div className="received_withd_msg">
                          <p>Test which is a new approach to have all solutions
                          </p>
                          <span className="time_date"> 11:01 AM    |    June 9</span></div>
                  </div>
              </div>
              <div className="outgoing_msg">
                  <div className="sent_msg">
                      <p>Test which is a new approach to have all solutions
                      </p>
                      <span className="time_date"> 11:01 AM    |    June 9</span> </div>
              </div>

          </div>
          <div className="type_msg">
              <div className="input_msg_write">
                  <input type="text" className="write_msg" placeholder="Type a message" />
                  <button className="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
              </div>
          </div>
  
          <div className="container ">
              <div id="app">
  
              </div>
          </div>
  
      </div>
  </div>
    )
  }
  
}

export default ChatRoom
