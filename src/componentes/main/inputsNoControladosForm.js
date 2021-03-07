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
  }

  submit(event){

    event.preventDefault()
    const nombre = event.target[0].value
    const email = event.target[1].value

    this.props.onSend({nombre, email})
  }

  render(){
    return(
      <form onSubmit={this.submit.bind(this)} >
        <input type="text" placeholder='Nombre'></input>
        <input type="text" placeholder='Email'></input>
        <div>
          <button > obtener </button>
        </div>
      </form>
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