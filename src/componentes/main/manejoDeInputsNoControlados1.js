import React, {Component} from 'react'
import './global.css'


/* 

leccion manejando inputs no controlados con refs

 */

 const Unicorn =()=>(
  <span role='img' aria-label='unicornio'>
    🦄  
  </span>
 )

 class InptuNoControlado extends Component{

  constructor(){
    super()

    this.nombre = React.createRef() //ref
    this.email = React.createRef() //ref

  }

  manejador(){

    const nombre = this.nombre.current.value
    const email = this.email.current.value
    /*
    envia los datos obtenidos del los inputs al componente padre
    a traves de una funcion personalizada
    */
    this.props.onSend({nombre, email}) 

  }

  render(){
    return(
      <div>
        <input type="text" ref={this.nombre} placeholder='Nombre'></input>
        <input type="text" ref={this.email}  placeholder='Email'></input>
        <div>
          <button onClick={this.manejador.bind(this)}> obtener </button>
        </div>
      </div>
    )
  }

 }

/* clase */
class App extends Component{

  constructor(){
    super()

    this.state = {

    }
  }

  send(data){
    console.log(data)
  }

  render(){

    return(
      <div >
        <h1> Inputs no controlados Refs <Unicorn></Unicorn> </h1>

        <InptuNoControlado
          onSend={this.send.bind(this)} 
        ></InptuNoControlado>
      </div>
    )
  }
}


export default App