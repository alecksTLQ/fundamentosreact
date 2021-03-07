import React from 'react'


class Contador extends React.Component{

  constructor(){
    super()

    const METHODS = [
      'add'
    ]

    METHODS.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
      video: {
        title: 'super video',
        likes: 0
      }
    }
  }
  /*  usando spread para hacer la actualizacion del state de forma correcta, y mezclando los atributos anteriores con los actuales 
      y asi evitar quitar atributos 
  */
  add(){
    this.setState((prevState, props)=> ({
      video: {
        ...this.state.video,
        likes: prevState.video.likes + 1
      }
    }))
  }

  render(){

    return (
      <div>
        <h1>
          {this.state.video.title}
        </h1>
        <button onClick={this.add}>
          Likes: ({this.state.video.likes})
        </button>
      </div>
    )
  }
}


const App =()=>(
    
    <div>
      <Contador></Contador>
    </div>
)

export default App
