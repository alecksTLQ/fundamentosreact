import React from 'react'
import {BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom'
import './global.css'

/*

  Uso de Redirect para controlar acceso a perfil 
  solo en caso de que la constante isAuth se true
  
  o para usar rutas cortas <Redirect from='/p' to='/perfil' ></Redirect>

*/

const Home =()=>{

  return(
    <div>
      Home
    </div>
  )
}

const Login =(props)=>{
  
  if(props.location.state){
    return(
      <h2> {props.location.state.message} </h2>
    )
  }

  return(
    <div>
      Login
    </div>
  )
}

const isAuth = false

const Perfil=()=>{
  return isAuth
    ? <h2> Bienvenido a tu perfil </h2>
    : <Redirect 
        to={{
          pathname: '/login',
          state : { 
            message: 'Debes hacer login para acceder a tu perfil'
          }
        }} 
      />
}

const Navegation =()=>{
  return(
    <nav>
      <NavLink to='/' exact activeClassName='active' >Home</NavLink>
      <NavLink to='/perfil' activeClassName='active' >Perfil</NavLink>
      <NavLink to='/login' activeClassName='active' >Login</NavLink>
    </nav>
  )
}

/* clase */
const App =()=>{

  return(
    <BrowserRouter>
        <Navegation></Navegation>
        <Route path='/' exact render={Home} />
        <Route path='/login' render={Login} />
        <Route path='/perfil' render={Perfil} />
        <Redirect from='/p' to='/perfil' ></Redirect>
    </BrowserRouter>
  )
}

export default App