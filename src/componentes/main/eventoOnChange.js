import React, { Component } from 'react'
//import TarjetaFruta from './componentes/TarjetaFruta/TarjetaFruta'
//import Card from './componentes/TarjetaFruta/Card'

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
      text: '',
      evento: ''
    }
  }

  manejador(event){
    console.log(event.target.value)
    this.setState({
      text: event.target.value,
      evento: event.type
    })
  }

  render(){

    return (
      <div>
        <input type="text" 
          onChange={this.manejador}
          onCopy={this.manejador}
          onPaste={this.manejador}
        ></input>
        <h1>
          {this.state.text}
        </h1>
        <h2>
          {this.state.evento}
        </h2>
      </div>
    )
  }
}

export default App


/*
// pasando datos por props a un componente funcional
<TarjetaFruta name='Sandia' price={2.00}></TarjetaFruta>
<TarjetaFruta name='Melocoton' price={4.00}></TarjetaFruta>
<TarjetaFruta name='Platano' price={4.50}></TarjetaFruta>
<Card></Card>  

 */