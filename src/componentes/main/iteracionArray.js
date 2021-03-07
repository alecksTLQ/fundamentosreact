import React, {Component} from 'react'

const frutas = [
  'manzana',
  'naranja',
  'fresa',
  'kiwi',
  'toronja'
]

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
      <div>
        <ul>

          {frutas.map((fruta)=>{
            return (
              <li> {fruta} </li>
            )
          })}

        </ul>
      </div>
    )
  }
}


export default App