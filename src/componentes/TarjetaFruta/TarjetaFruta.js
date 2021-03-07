import React from 'react'
//import de estilos css de esta forma es practicamente imposible que existan conflictos entre las diferentes hojas de estilos
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component{
  
    constructor(){
      super()
  
      const METHODS = [
        'agregar',
        'quitar',
        'limpiar'
      ]
      //con este forEach se recorren todos los metodo y se les agrega el bind(this)
      METHODS.forEach((method) =>{
        this[method] = this[method].bind(this)
      })
  
      this.state = {
        cantidad: 0
      }
    }
  
    /* metodo de clase */
    agregar(){
      this.setState({
        cantidad: this.state.cantidad + 1
      })
    }
  
  
    quitar(){
      this.setState({
        cantidad: this.state.cantidad - 1
      })
    }
  
    limpiar(){
      this.setState({
        cantidad: 0
      })
    }
  
    /* 
      el bind le indica al metodo que cuando se hace un this. dentro de el se esta
      apuntando a la clase y no al metodo
     */
  
    render(){

        {/* aplicacion de estilos en react haciendo uso de constantes y con condicionales */}
        const hasItems = this.state.cantidad > 0
        const activeClass = hasItems ? styles['card-active'] : ''
        const clases = styles.card + ' ' + activeClass

      return (
        <div className={clases}>
          <h3>{this.props.name}</h3>
          <hr/>
          <div>cantidad: {this.state.cantidad} </div>
  
          <button 
            onClick={this.agregar}
          >
            Agregar
          </button>
  
          <button
            onClick={this.quitar}
          >
            quitar
          </button>
  
          <button
            onClick={this.limpiar}
          >
            limpiar
          </button>
  
          <p> {this.props.price} </p>
          <p>
              Total: ${this.props.price * this.state.cantidad}
          </p>
        </div>
      )
    }
  
  }

  export default TarjetaFruta;