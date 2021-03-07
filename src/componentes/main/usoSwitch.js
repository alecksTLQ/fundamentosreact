import React from 'react'
import {BrowserRouter, Route, Link, NavLink , Switch} from 'react-router-dom'

/*

*/

const Home =()=>{

  return(
    <div>
      Home
    </div>
  )
}

const Videos =()=>{
  return(
    <div>
      Videos
    </div>
  )
}

const Playlist=()=>{
  return(
    <div>
      Playlist
    </div>
  )
}

/* clase */
const App =()=>{

  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={Home} />
        <Route path='/videos' render={Videos} />
        <Route path='/videos' render={Playlist} />
      </Switch>
    </BrowserRouter>
  )
}

export default App