import React, {Component} from 'react'
import './global.css'


/* 

leccion select multiple

 */

const Unicorn =()=>(
  <div>
    🦄
  </div>
)

/* clase */
class App extends Component{

  constructor(){
    super()

    this.state = {
      options: ['angular']
    }
  }

  updateOption(event){
    const options = Array.from(
      event.target.selectedOptions
      ).map((option)=> option.value)

      console.log(options)
    this.setState({
      options
    })
  }

  render(){

    return(
      <div >
        <h1> Etiqueta select <Unicorn></Unicorn> </h1>
        <h2> {this.state.options} </h2>

        <form>
          <select 
            value={this.state.options} 
            onChange={this.updateOption.bind(this)}
            multiple={true}
          >
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
          </select>
        </form>

        <ul>
          {
            this.state.options.map((option)=>{
              return (
                <li  key={option}> {option} </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


export default App