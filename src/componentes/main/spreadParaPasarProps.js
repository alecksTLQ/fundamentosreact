import React, { Component } from 'react'


const Gato =(props)=>(
  <div>
    <h1>Gato</h1>
    <pre>
      {JSON.stringify(props, null, 4)}
    </pre>
  </div>
)

class App extends Component{

  constructor(){
    super()


    this.state = {
      name: 'chato',
      fuerza: 100,
      vidaRestante: 7 
    }
  }


  render(){

    const otrosDatos = {
      raza: 'tropical',
      peleasNocturnas: 300
    }

    /* usando spread para pasar varios props contenidas en una constante
        y tambien pasar el state
    */
    return (
      <div>
        <Gato
          name = 'Garfield'
          age= '2 años'
          {...otrosDatos}
          {...this.state}
        ></Gato>
    </div>
    )
  }
}

export default App
