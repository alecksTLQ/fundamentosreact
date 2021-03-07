import React, { Component } from 'react'
//import TarjetaFruta from './componentes/TarjetaFruta/TarjetaFruta'
//import Card from './componentes/TarjetaFruta/Card'


const styles = {
  height: '200px',
  background: 'gold',
  padding: '1em',
  boxSizing: 'border-box'
}


class App extends Component{

  constructor(){
    super()

    const METHOD = [
      'manejador'
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
      x: 0,
      y: 0
    }
  }

  manejador(event){
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }


  render(){

    return (
      <div 
        style={styles} 
        onMouseMove={this.manejador}
      >
        <button
          onDoubleClick={this.manejador}
        >
          onDoubleClick
        </button>
        <button
          onMouseUp={this.manejador}
        >
          mouseup
        </button>
        <button
          onMouseDown={this.manejador}
        >
          onMouseDown
        </button>
        <button
          onClick={this.manejador}
        >
          onClick
        </button>

        <div>
          x: {this.state.x}
        </div>
        <div>
          y: {this.state.y}
        </div>
      </div>
    )
  }
}

export default App