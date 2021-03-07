import React, {Component} from 'react'
import './global.css'


/* 

  Reenvio de refs

 */

 const FancyInput= React.forwardRef((props, ref) =>(
  <div>
    <input type="text" ref={ref}></input>
  </div>
))


/* clase */
class App extends Component{

  constructor(){
    super()

    this.entrada = React.createRef()

    this.state = {

    }
  }

  componentDidMount(){
    console.log(this.entrada)
  }


  render(){

    return(
      <div >
        <h1>Reenvio de Refs 🥶</h1>
        <FancyInput 
          ref={this.entrada} 
        />
      </div>
    )
  }
}


export default App