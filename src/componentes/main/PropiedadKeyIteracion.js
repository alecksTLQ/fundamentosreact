import React, {Component} from 'react'


const users = [
  { id: 1, name: 'Orslok', country: 'spain' },
  { id: 2, name: 'Abby', country: 'spain' },
  { id: 3, name: 'Xhiet0', country: 'spain' },
  { id: 4, name: 'Winghaven', country: 'spain' }
]

/* Leccion propiedad key en iteraciones y su funcion */

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
        <h1>Iterando</h1>
        <ul>
          {
            users.map((user)=>{
              return(
                <li  key={user.id}> { user.name } </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


export default App