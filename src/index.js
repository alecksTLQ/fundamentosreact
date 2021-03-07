import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'



// el root es el id que se encuentra en la plantilla html 
const root = document.getElementById('root')

//renderiza todo lo contenido en App
ReactDOM.render(<App />, root)


































/*

constructo de una clase

//como se inicializa el componente 
constructor(){
  super()

  //forma de hacer bind a cada metodo caso 1
  this.agregar = this.agregar.bind(this)
  this.quitar = this.quitar.bind(this)

  caso 2 para hacer bind a metodos
  //la constante METHODS contiene todos los metodo
  const METHODS = [
    'agregar',
    'quitar',
    'limpiar'
  ]
  //con este forEach se recorren todos los metodo y se les agrega el bind(this)
  METHODS.forEach((method) =>{
    this.[method] = this[method].bind(this)
  })

  this.state = {
    cantidad: 50
  }
}

*/







/**
 * 
 * 
 * tres formas de crear un compoente funcinal
 * 
const TarjetaFruta2 = (props) =>(
  <div>
      <h3>{props.name}</h3>
      <hr/>
      <p> {props.price} </p>
  </div>
)

const TarjetaFruta3 = (props) =>{
  console.log(props)
  return (
    <div>
      <h3>{props.name}</h3>
      <hr/>
      <p>{props.price} </p>
    </div>
  )
}

function TarjetaFruta(props){
  // el props son datos de entrada para la funcion 
  console.log(props)
  return (
    <div>
      <h3>{props.name}</h3>
      <hr/>
      <p>{props.price} </p>
    </div>
  )
}


const App =()=>(
  // pasando datos por props a un componente funcional
  <div>
    <TarjetaFruta2 name='Sandia' price={2.00}></TarjetaFruta2>
    <TarjetaFruta name='Melocoton' price={4.00}></TarjetaFruta>
    <TarjetaFruta3 name='Platano' price={4.50}></TarjetaFruta3>
  </div>
)

// el root es el id que se encuentra en la plantilla html 
const root = document.getElementById('root')

//renderiza todo lo contenido en App
ReactDOM.render(<App />, root)
 * 
 * 
 * 
 */