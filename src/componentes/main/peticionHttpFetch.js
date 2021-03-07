import React, {Component} from 'react'
import './global.css'


/* 

Peticiono HTTP 
con fetch
 */

/* clase */
class App extends Component{

  constructor(){
    super()

    this.state = {
      users: [],
      cargando: true
    }
  }

  /* 
        el metodo se ejecuta al terminar de cargar los componentes
        hace una peticion http al api el cual devuelve una res, para poder
        leer el res se parsea con json para luego almacenar los datos 
        devueltos en la propiedad users del state
  */
  componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then(users =>
        this.setState({
          users,
          cargando: false
        })
      )
    .catch(error =>{
      console.log(error)
    })
  }

  render(){

    /*
        en caso de que la peticion aun este en proceso
        se mostrara el h1  
     */
    if(this.state.cargando){
      return(
        <h1> Cargando... </h1>
      )
    }

    /*
        una vez finalizado el proceso de peticion al api se mostrar el resultado
        con los datos obtenidos 
     */

    return(
      <div >
        <h1>Peticion HTTP</h1>
        <h2> {this.state.text} </h2>

            <ul>
              {
                this.state.users.map((user)=>{
                  return(
                    <li  key={user.id}> 
                      {user.name} 

                      <a href={`http://${user.website}`}>
                        website
                      </a>
                    </li>
                  )
                })
              }
            </ul>

      </div>
    )
  }
}


export default App