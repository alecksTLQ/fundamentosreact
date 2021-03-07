import React from 'react'
//import Saluda from './destructuracion'


/* leccion: prop especial children 
    -la prop children permite que dentro de la etiqueta
     <Title>   </Title>

     se envie en este caso texto y html el cual se inserta en 
     el h1 del Title, gracias a la referencia props.children
*/


/* componente funcional */
const Title =(props)=>{

  const {uiColor, children} = props //destructuracion de las props

  const formato = {
    padding: '0.3em',
    color: '#FFF',
    background:  uiColor,
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  }

  console.log(children)

  return (
    <h1 style={formato}> {children} </h1>
  )
}


/* clase */
class App extends React.Component{

  constructor(){
    super()
    this.state = {
      uiColor: 'purple'

    }
  }

  render(){

    const {uiColor} = this.state

    return(
      <div>
        <Title uiColor={uiColor}>
          Super <em>Ninja</em>
        </Title>
      </div>
    )
  }


}


export default App