import React, { Component } from 'react'
import './global.css'

/* 
    - escuchadores de eventos personalizados
    - como ejecutar funcionalidad desde un hijo hacia el padre
    
    - en este caso a traves del hijo se dispara un evento que se 
      encuentra en el padre
    - en el hijo se usa un evento nativo el cual accede a traves de 
      las props al evento personalizado que esta en el padre que 
      a su vez ejecuta una funcion
*/

class Hijo extends Component{
  constructor(){
    super()

    //constante para almacenar metodos y poder iterarlos y pasarles el contexto
    const METHOD = [
      'manejadorClick'
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
      
    }
  }

  /* 
    - pasamos datos a traves de la funcion onSaluda la cual es accedida por medio 
    - de las props, ya que onSaluda pertenece a el componente padre
   */
  manejadorClick(){
    this.props.onSaluda('ninja en react')
  }

  render(){
    return(
      <div className="box red">
        <h2>Hijo</h2>

        <button onClick={this.manejadorClick} > Saluda </button>
      </div>
    )
  }
}

class App extends Component{
  constructor(){
    super()

    //constante para almacenar metodos y poder iterarlos y pasarles el contexto
    const METHOD = [
      'manejador'
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
       name: ''
    }
  }

  /* 
    el evento personalizado onSaluda hace referencia a esta funcion 
      - la cual recibe el dato _name desde el hijo
  */
  manejador(_name){
    this.setState({
      name: _name
    })
  }

  render(){

    return (
      <div className="box blue">
        <Hijo onSaluda={this.manejador}  ></Hijo>
        <div> Name: {this.state.name} </div>
      </div>
    )
  }
}

export default App