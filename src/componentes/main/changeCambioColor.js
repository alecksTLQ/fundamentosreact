import React, { Component } from 'react'
//import TarjetaFruta from './componentes/TarjetaFruta/TarjetaFruta'
//import Card from './componentes/TarjetaFruta/Card'

class PersistenciaEventos extends Component{

  constructor(){
    super()

    //constante para almacenar metodos y poder iterarlos y pasarles el contexto
    const METHOD = [
      'handlerChange'
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
      color: 'blue'
    }
  }

  handlerChange(event){
    const colorE = event.target.value

    this.setState(state=>({
      color: colorE
    }))
  }

  render(){

    return (
      <div>
        <input type="text"
          onChange={this.handlerChange}
        />
        <h1 style={{
          color: this.state.color
        }}>
          {this.state.color}
        </h1>
      </div>
    )
  }
}

const App =()=>(
  <div>
    <PersistenciaEventos></PersistenciaEventos>
  </div>
)

export default App