import React from 'react'
import {BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom'
import './global.css'

/*

*/

const Home =()=>{
  return(
    <h2>Home</h2>
  )
}

const Ninja =()=>{
  return(
    <h2>Ninja</h2>
  )
}

const Videos =()=>{
  return(
    <h2>Videos</h2>
  )
}
const NavegacionImperativa = ({history} )=>{
  console.log(history)
  return(
    <div>
      <button onClick={history.goBack}>
        Atras
      </button>

      <button onClick={history.goForward}>
        Adelante
      </button>

      <button onClick={
        ()=>{
          history.go(2)
        }
      }>
        Go 2
      </button>

      <button onClick={
        ()=>{
          history.push('/ninja')
        }
      }>
        Push Ninja
      </button>

      <button onClick={
        ()=>{
          history.replace('/videos')
        }
      }>
        Replace Videos
      </button>
    </div>
  )
}

const Navegation =()=>{
  return(
    <nav>
      <NavLink to='/' exact activeClassName='active' >Home</NavLink>
      <NavLink to='/ninja' activeClassName='active' >Ninja</NavLink>
      <NavLink to='/videos' activeClassName='active' >Videos</NavLink>
    </nav>
  )
}

/* clase */
const App =()=>{

  return(
    <BrowserRouter>
        <Navegation></Navegation>
        <Route render={NavegacionImperativa} />
        <Route path='/' exact render={Home} />
        <Route path='/ninja' render={Ninja} />
        <Route path='/videos' render={Videos} />
    </BrowserRouter>
  )
}

export default App