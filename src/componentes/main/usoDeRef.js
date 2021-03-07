import React, {Component} from 'react'
import './global.css'


/* 
  Refs
  - nos ayudan a tener la referencia de un elemento en el dom real

 */

 const imgg=()=>{
   
 }

 class Entrada extends Component {

  
  constructor(){
    super()

    this.entrada = React.createRef()
    this.state = {

    }
  }

  componentDidMount(){
    this.focus()
  }
 
  focus(){
    this.entrada.current.focus()
  }

  blur(){
    this.entrada.current.blur()
  }

  render(){
    return(
      <div>
        <input type="text" ref={this.entrada}></input>

        <div>
          <button onClick={this.focus.bind(this)}>focus</button>
          <button onClick={this.blur.bind(this)}>blur</button>
        </div>
      </div>
    )
  }
 }

/* clase */
class App extends Component{

  constructor(){
    super()

    const METHOD = [
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {

    }
  }


  render(){

    return(
      <div >
        <h1>React Refs 🐱‍🚀</h1>
        <Entrada></Entrada>
      </div>
    )
  }
}


export default App