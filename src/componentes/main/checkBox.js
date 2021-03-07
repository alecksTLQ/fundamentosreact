import React, {Component} from 'react'
import './global.css'


/* 

leccion checkBox
 */

/* clase */
class App extends Component{

  constructor(){
    super()

    this.state = {
      active: true
    }
  }

  updateCheck(event){
    const estado = event.target.checked

    this.setState({
      active: estado
    })
  }

  render(){
    const {active} = this.state
    return(
      <div >
        {
          active && (
            <h1> Etiqueta checkbox </h1>
          )
        }
        <form>
          <input 
            type="checkbox"
            checked={this.state.active}
            onChange={
              this.updateCheck.bind(this)
            }
          ></input>
        </form>
      </div>
    )
  }
}


export default App