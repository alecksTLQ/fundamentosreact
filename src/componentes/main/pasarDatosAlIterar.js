import React, {Component} from 'react'
import './global.css'

/* pasar datos al iterar listas a una funcion */

/* clase */
class App extends Component{

  constructor(){
    super()

    const METHOD = [
      'seleccionar'
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
      frutas: [
        { id: 1, name: 'manzana', price: '$2.00' },
        { id: 2, name: 'toronja', price: '$2.50' },
        { id: 3, name: 'banano', price: '$1.00' },
        { id: 4, name: 'durazno', price: '$3.50' },
        { id: 5, name: 'fresas', price: '$2.40' }
      ],
      frutaSeleccionada: {}
    }
  }

  seleccionar(frutaSeleccionada, event){
    alert(frutaSeleccionada.name)
    this.setState({
      frutaSeleccionada
    })
  }

  render(){

    const {frutas, frutaSeleccionada} = this.state

    return(
      <div >
        <ul>
          {
            frutas.map((fruta)=>{
              return(
                <li 
                  key={fruta.id}
                  onClick={this.seleccionar.bind(this, fruta)}
                  style={{
                    color: frutaSeleccionada.name ===fruta.name ? 'red' : '#000'
                  }}
                > 
                  {fruta.name} 
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


export default App