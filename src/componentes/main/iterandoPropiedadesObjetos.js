import React, {Component} from 'react'

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
      user: {
        name: 'orslok',
        youtube: 'orslok x',
        country: 'spain',
        twitter: '@orslokX'
      }
    }
  }

  render(){

    const {user} = this.state

    const keys = Object.keys(user)

    return(
      <div>
        <h1>iterando propiedades de objetos</h1>
        <ul>
          {
            keys.map((key)=>{
              return(

                <li> {key} : {user[key]} </li>

              )
            })
          }
        </ul>
      </div>
    )
  }
}


export default App