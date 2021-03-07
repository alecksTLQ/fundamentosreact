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
      
    }
  }

  manejador(e){
    console.log(e)
    console.log(e.nativeEvent)
    e.preventDefault()
  }

  render(){

    return (
      <div>
        <a
          href="https://google.com" 
          onClick={this.manejador}
        >
          Google
        </a>
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