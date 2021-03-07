import React, {Component} from 'react'
import PropTypes from 'prop-types'

/* leccion PropTypes and DefaultProps */

const noop =()=>{}

class Profile extends Component{

  constructor(){
    super()

    const METHOD = [
      '_saluda'
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
      
    }
  }

  _saluda(){
    this.props.onHello()
  }
  
  render(){

    const { name, bio, email, age} = this.props

    return(
      <div>
        <h1>{name} </h1>
        <p>
          {bio}
        </p>
        <a href={`mailto: ${email}`}>
          {email}
        </a>
        <p>
          {age}
        </p>
        <button onClick={this._saluda}>Saluda</button>
      </div>
    )
  }
}

/*
    - sirven para validar las props ya sea por tipo de dato
    - required, entre muchas otras validaciones
 */
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number
}

/* 
  - se definen valores por defecto a los props
  - tambien se pueden utilizar para controlar errores en evento personalizados
    ya que en caso de no haber pasado el evento personalizado como prop este
    tomara el valor noop que es un arrow function vacio

*/
Profile.defaultProps = {
  age: 25,
  onHello: noop
}

/* clase */
class App extends Component{

  constructor(){
    super()

    const METHOD = [
      'activar'
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
      
    }
  }

  activar(){
    alert('hello')
  }

  render(){

    return(
      <div>
        <Profile
          name='Orslok'
          bio='streamer de exito'
          email='orslok.contacto@gmail.com'
        ></Profile>
      </div>
    )
  }
}


export default App