import React, {Component} from 'react'

//Id del proyecto FireBase:
//reactjs-92066

class ChatRoom extends Component {
    constructor(){
        super();
        this.updateMessage = this.updateMessage.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
    

        this.state = {
            message: '',
            messages: [
                    {id: 0, text: 'Realizando test con las imagenes', nombre: 'Yampi', date: 'Dec 25', image: 'http://yampi.cat/chat/yampi.png'},
                    {id: 1, text: 'Realizando test con las imagenes', nombre:'David', date: 'Dec 25', image:'http://yampi.cat/chat/david.jpg'},
                    {id: 2, text: 'Realizando test con las imagenes', nombre:'Alejandro', date: 'Dec 25', image: 'http://yampi.cat/chat/alejandro.jpg'},
                    {id: 3, text: 'Realizando test con las imagenes', nombre:'Ban', date: 'Dec 25', image: 'http://yampi.cat/chat/reference-image-3.jpg'}
            ],
            private:[
                // {id: 0, text: 'Hola bon día', date: 'Dec 25', hora: '11:01',image:'http://yampi.cat/chat/david.jpg',subject:'in'},
                // {id: 1, text: 'los errores del git me persiguiran por siempre', date: 'Dec 25', hora: '11:01', subject:'out'},
                // {id: 2, text: 'Hola bon día', date: 'Dec 25', hora: '11:01',image:'http://yampi.cat/chat/david.jpg',subject:'in'},
                
            ]
        }
    }
    componentDidMount() {
        firebase.database().ref('private/').on('value', snapshot => {
          const currentMessages = snapshot.val();
          
          if (currentMessages != null) {
            this.setState({
              private: currentMessages
            });
          }
    
        });
      }

    updateMessage(e){
        this.setState({
            message: e.target.value
        })
    }
    sendMessage(){
        //Funciones para scroll para los mensajes privados
        var container = document.getElementById("scroll")
        container.scrollTop = container.scrollHeight+400;
        console.log(container.scrollHeight)
        console.log(container.scrollTop)
        
         var imgIn= ''
         var subjectIn= 'out'
        // if(this.state.private[this.state.private.length-1]['image'] !=undefined){
        //     imgIn = this.state.private[this.state.private.length-1]['image']
        //     subjectIn = 'in'
        // }
         var MainDate = Date(Date.now()).toLocaleString()
         console.log(MainDate)
         var dateIn= MainDate.substring(0,10)
         var horaIn = MainDate.substring(16,21)
         const message = {
             id: this.state.private.length,
             text: this.state.message,
             date: dateIn,
             hora: horaIn,
        //     image: imgIn,
        //     subject: subjectIn
         }
        // console.log(message)
        // const listMessage = this.state.private
        // listMessage.push(message)
        // this.setState({
        //     private: listMessage
        // })
        // this.state.private[this.state.private.length+1]
        console.log(message)
        firebase.database().ref('private/' + message.id).set(message)
        this.setState({message:''})

    }

    render(){
        const currentMessages = this.state.messages.map((message, i)=>{
            return (
                <div className="chat_list active_chat" key={message.id}>
                  <div className="chat_people">
                      <div className="chat_img"> <img src={message.image} alt="sunil"/> </div>
                      <div className="chat_ib">
                          <h5>{message.nombre} <span className="chat_date">{message.date}</span></h5>
                          <p>{message.text}</p>
                      </div>
                  </div>
              </div>
        )
    })

    const privateMessages = this.state.private.map((message,i)=>{
        if(message.subject==='in'){
            return (
                <div className="incoming_msg" key={message.id}>
                <div className="incoming_msg_img"> <img src={message.image} alt="sunil"/> </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{message.text}
                        </p>
                        <span className="time_date"> {message.date}   |    {message.hora}</span></div>
                </div>
            </div>
            )
        }else{
            return(
            <div className="outgoing_msg" key={message.id}>
                <div className="sent_msg">
                    <p>{message.text}
                    </p>
                    <span className="time_date"> {message.date}   |    {message.hora}</span></div>
            </div>
            )
        }

    })


    return(

      <div className="inbox_msg mt-5">
      <div className="inbox_people">
        {/* Lo de las fotos he pensado y se puede crear un array en un LocalStorage */}
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
          <div className="inbox_chat" >
              {/* Realizar un bucle para rellenar los div con los usuarios en línea */}
              {currentMessages}
          </div>
          
                    
      </div>
      <div className="mesgs" >
        {/*  Bloque de código que muestra el mensaje de Usuario 2 IMPORTANTE => hacer un debug para que no incluir un usuario anonimo */}
          <div className="msg_history" id="scroll">
            {/* bucle de los mensaje privados */}
            {privateMessages}
              {/* Fin de bucle del usuario remitente */}


          </div>
          {/* DIV que contiene el input para enviar el mensaje. */}
          <div className="type_msg" >
              <div className="input_msg_write">
                  <input value={this.state.message} onChange={this.updateMessage} type="text" className="write_msg" placeholder="Escribe tu mensaje" />
                  <button onClick={this.sendMessage} className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
              </div>
          </div>
          {/* Fin de la DIV de envio del formulario del mensaje*/}
         
  
      </div>
  </div>
    )
  }
  
}

export default ChatRoom
