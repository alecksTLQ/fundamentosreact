import React, {Component} from 'react'
import './global.css'


/* 

Peticiono HTTP 
con fetch y un parametro de busqueda
 */

/* clase */
class App extends Component{

  constructor(){
    super()

    this.state = {
      movie: {},
      estado: false
    }
  }

  manejador(event){
    event.preventDefault() // prevenir el comportamiento default del submit
    const title = event.target[0].value

    this.setState({
      estado: true
    })

    /* url de la cual se esta obteniendo los datos */
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=de086118'

    /* 
      fetch hace la solicitud al api
        - el primer then obtiene una respuesta la cual la parse con el json()
        - data contiene los datos la parseados los cuales son un objeto 
        - data es almacenado en el state en la propiedad movie
     */
    fetch(url + '&t=' + title)
    .then(res => res.json())
    .then(data =>
        this.setState({
          movie: data,
          estado: false
        })
      ).catch(error => console.log(error))
  }

  render(){

    const {Title, Plot, Poster} = this.state.movie

    const posterCss = {
      width : '200px'
    }

    return(
      <div >
        <h1>
          Ejemplo de HTTP buscador de peliculas
        </h1>

        <form onSubmit={this.manejador.bind(this)}>
          <input type="text" placeholder=''></input>
          <button>Buscar</button>
        </form>
        {
          /* mientras el estado sea true se mostrara le h2 */
          this.state.estado && (
            <h2>Cargando.....</h2>
          )
        }
        {
          /* si Title esta definido y estado es distinto de true se mostrar lo contenido en los parentesis */
            Title && !this.state.estado &&(
            <div> 
              <h2> Titulo: {Title} </h2>
              <p>
                {Plot}
              </p>
              <img style={posterCss} src={Poster} alt='Poster'></img>
            </div>
          )
        }
      </div>
    )
  }
}


export default App


/*
{Title: "Hulk", Year: "2003", Rated: "PG-13", Released: "20 Jun 2003", Runtime: "138 min", …}
Actors: "Eric Bana, Jennifer Connelly, Sam Elliott, Josh Lucas"
Awards: "3 wins & 14 nominations."
BoxOffice: "$132,177,234"
Country: "USA"
DVD: "15 Jun 2012"
Director: "Ang Lee"
Genre: "Action, Sci-Fi"
Language: "English, Spanish"
Metascore: "54"
Plot: "Bruce Banner, a genetics researcher with a tragic past, suffers an accident that causes him to transform into a raging green monster when he gets angry."
Poster: "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg"
Production: "Marvel Films"
Rated: "PG-13"
Ratings: (3) [{…}, {…}, {…}]
Released: "20 Jun 2003"
Response: "True"
Runtime: "138 min"
Title: "Hulk"
Type: "movie"
Website: "N/A"
Writer: "Stan Lee (Marvel comic book character), Jack Kirby (Marvel comic book character), James Schamus (story), John Turman (screenplay), Michael France (screenplay), James Schamus (screenplay)"
Year: "2003"
imdbID: "tt0286716"
imdbRating: "5.6"
imdbVotes: "252,029"

*/