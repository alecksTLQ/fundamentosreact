import React, {Component} from 'react'
import './global.css'


/* 

leccion manejo de errores
 */

 class Boton extends Component{
   constructor(){
     super()

     this.state = {
       dispararError: false
     }
   }

   dispatchError(){
     this.setState({
       dispararError: true
     })
   }

   render(){

    if(this.state.dispararError){
      throw new Error('lo siento he fallado')
    }
     return(
       <button onClick={this.dispatchError.bind(this)}>
         boton con bug
       </button>
     )
   }
 }


 class LimiteErrores extends Component {

  constructor(){
    super()

    this.state = {
      tieneError: false
    }
  }

  /* 
    este metodo se activa cuando ocurres algun error 
    y actualiza la propiedad tieneError del state lo cual hace
    retornar y renderizar el div con los mensajes de error
  */
  componentDidCatch(error, errorInfo){
    this.setState({
      tieneError: true,
      error
    })
  }
   render(){

    /* en caso de existir error se hace return de esto */
    if(this.state.tieneError){
      return(
        <div>
          Wops! algo ha salido mal puedes recargar o contactar con el servicio de soporte

          <div
            style={
              {
                color: 'orangered'
              }
            }
          >
            {
              this.state.error && this.state.error.toString()
            }
          </div>
        </div>
      )
    }
     /* en caso de no existir error este retorna al hijo contenido dentro de LimiteErrores */
     return this.props.children
   }
 }


/* clase */
class App extends Component{

  constructor(){
    super()

    this.state = {

    }
  }

  render(){

    /* 
      componente limiteErrores es quien activa los mensajes de error
      componente Boton es quien provoca el error
     */
    return(
      <div >
        <LimiteErrores>
          <Boton></Boton>
        </LimiteErrores>
      </div>
    )
  }
}


export default App