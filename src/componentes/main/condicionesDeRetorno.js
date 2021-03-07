import React, { Component } from 'react'


/* condiciones de retorno entre componente usando props */
const Saludo =(props)=>{


  return(
    <div>
      <div>
        { props.name && <strong> {props.name} </strong>}
      </div>
      {
        props.saluda ?
        (
          <h1>Hola este es otra forma de comprobar si saludo es true</h1>
        ) :
        (
          <p>
            otra forma de retornar cuando es false!
          </p>
        )
      }
    </div>
  )

  if(props.saluda){
    return (
      <h1>Hola, tu eres genial</h1>
    )
  }

  return(
    <p>
      wops, no hay saludos para ti!
    </p>
  )


}


const App =()=>(


  <div>
    <Saludo saluda name='probando la condicion and'></Saludo>
  </div>


)

export default App