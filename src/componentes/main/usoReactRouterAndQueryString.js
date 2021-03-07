import React from 'react'
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom'

import queryString from 'query-string'


/*

seccion react router v5
para usar query-string es necesario instalarlo con comando: npm i query-string

*/

/* clase */

const Hola =()=>{
  return(
    <div>
      <h1>Componente hola</h1>
    </div>
  )
}

const Productos =()=>{

  const categorias = [
    'gamers',
    'hogar'
  ]

  return(
    <div>
      <h1>Componente Productos</h1>
      {
        categorias.map((categoria)=>{
          return(
            <div>
              <Link to={'/productos/'+categoria}> {categoria} </Link>
              <br></br>
            </div>
          )
        })
      }
    </div>
  )
}

const ProductosCategoria=({match})=>{

  /* match es contenido de las props pero aca ya lo he destructurado */
  return(
    <div>
      <h1>Componente productos para {match.params.categoria} </h1>
    </div>
  )
}

const Home =(props)=>{

  console.log(props)

  return(
    <div>
      <h1>Componente Home</h1>
    </div>
  )
}

const Ropa=(props)=>{

  /* extraccion de datos con metodo URLSearchParams
  const query = new URLSearchParams(props.location.search)
  const color = query.get('color')
  const talla = query.get('talla')*/

  // extraccion de datos con query-string
  const query = queryString.parse(props.location.search)

  return(
    <div>
      componente ropa
      <div>
        color:
        { 
          query.color
        }
      </div>
      <div>
        talla: { query.talla}
      </div>
    </div>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const NavActive = {
  color: 'orangered'
}

const Navegation=()=>{

  return(

    <nav style={navStyles}>

      <NavLink to={
        {
          pathname: '/',
          search: '?ordenar=nombre',
          hash: '#hash-otro',
          state: {
            name: 'Orslok',
            age: 25
          }
        }
      }
      activeStyle={NavActive}
      exact
      >Home</NavLink>
      <NavLink to='/hola' activeStyle={NavActive} >Hola</NavLink>
      <NavLink to='/productos' activeStyle={NavActive} >Productos</NavLink>

      <NavLink to='/ropa' activeStyle={NavActive} > Ropa </NavLink>

    </nav>
  )
}

const App =()=>{

  /*
    Componente Navigation:
      - contiene los NavLink los cuales permiten redirigir hacia el componente requerido
    
    Los Route es donde se define la ruta a traves de la cual se renderizara el componente indicado
      - este componente posee varias props las cuales sirven para configurar cada ruta
        entre ellas path, exact, componente, render
    
    Para renderizar el componente ProductosCategoria, se usan rutas dinamicas con params y 
      asi poder pasar parametos al componente

    
  */

  return(
    <BrowserRouter>

      <Navegation></Navegation>

      <Route path='/' exact component={Home} />
      <Route path='/hola' render={Hola} />
      <Route path='/productos' exact render={Productos} />
      <Route path='/productos/:categoria/:id?' render={ProductosCategoria} />

      <Route path='/ropa'  render={Ropa} />

    </BrowserRouter>
  )
}

export default App


/*
pasando el componente producto como hijo del Route

<Route path='/productos'>
{
  ({match})=>{

    if(!match) return null

    return(
      <Productos></Productos>
    )
  }
}
</Route>

*/