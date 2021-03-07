import React, { Component } from 'react'



/* Inyectado de HTML con la propiedad dangerouslySetInnerHTML */
class App extends Component{

  constructor(){
    super()


    this.state = {
      marcado: `

        <h1> Inyectando HTML con React </h1>
      
      `
    }

  }

  render(){


    return(
      <div>
        <div

            dangerouslySetInnerHTML= {{
              __html: this.state.marcado
            }}
        >
          
        </div>
      </div>
    )
  }


}

export default App