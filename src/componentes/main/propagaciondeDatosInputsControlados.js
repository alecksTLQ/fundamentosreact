import React, {Component} from 'react'
import './global.css'


/* 

leccion propagacion de datos con inputs controlados

 */

 class InputsControlados extends Component{

  constructor(){
    super()

    this.state = {
      text: '',
      tieneError: false,
      color: '#E8E8E8'
    }
  }

  actualizar(event){
    const textV = event.target.value

    let tieneError
    let colors = 'green'

    if(textV !== '' && textV.length<5){
      tieneError = true
    }

    if(textV.trim()===''){
      colors = '#E8E8E8'
    }

    if(textV.trim() !== '' && textV.trim().length<5){
      colors = 'red'
    }

    this.setState({
      text: textV,
      color: colors

    })

    this.props.onChange(this.props.name ,textV)
  }
   render(){

    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: '0.3em 0.6em',
      outline: 'none'
    }

     return(
       <div>
         <input type="text"
          value={this.state.text}
          onChange={this.actualizar.bind(this)}
          style={styles}
          placeholder={this.props.placeholder}
        />
       </div>
     )
   }
 }

/* clase */
class App extends Component{

  constructor(){
    super()

    this.state = {
      name: '',
      email: ''
    }
  }

  actualizar(name, text){
    console.log(name)
    this.setState({
      [name]: text
    })
  }

  render(){

    return(
      <div >
        <h1> Inputs Controlados 🦄 </h1>
        <InputsControlados
          onChange={
            this.actualizar.bind(this)
          }
          name = 'name'
          placeholder='Nombre completo'
        ></InputsControlados>

        <InputsControlados
          onChange={
            this.actualizar.bind(this)
          }
          name='email'
          placeholder='Email'
        ></InputsControlados>

        <h2>Nombre: {this.state.name} </h2>
        <h2>Email:  {this.state.email} </h2>
      </div>
    )
  }
}


export default App