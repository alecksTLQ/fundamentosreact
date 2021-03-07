import React, {Component} from 'react'
import './global.css'



const images = [
  {
    author: {
      name: 'Orslok',
      avatar: 'https://i.pinimg.com/736x/17/b7/b4/17b7b45d8ccf8ec92c72db5c08df75bc.jpg',
    },
    source: 'https://lthumb.lisimg.com/649/21928649.jpg?width=280&sharpen=true',
    views: '250,000',
    id: 1
  },
  {
    author: {
      name: 'LittleRagerGirl',
      avatar: 'https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/e35/c0.96.1440.1440a/s320x320/129768502_461670878156856_2293611515318929819_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=100&_nc_ohc=0jBcZEg5LsMAX8kXxMp&tp=1&oh=4ebda2ad3a3845d3753646baa50aeea9&oe=604B2914',
    },
    source: 'https://ggupfest.com/wp-content/uploads/2020/12/littleragergirl-1-1.jpg',
    views: '190,255',
    id: 2
  }
]

const Image =( {img} )=>(
  <div className='card'>
    <img src={img.source} al='Imagen' className='image'></img>

    <div className='footer'>
      <img
        className='avatar'
        src={img.author.avatar} 
        alt='Avatar'
      ></img>
      <div>
        {
          img.author.name
        }
      </div>
      <div>
        {
          img.views
        }
      </div>
    </div>
  </div>
)

/* clase */
class App extends Component{

  constructor(){
    super()

    const METHOD = [
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
    }
  }

  render(){


    return(
      <div className='images'>
        {
          images.map((imagen)=>{
            return(

              <Image  
                img={imagen}
                key={imagen.id}
              >

              </Image>

            )
          })
        }
      </div>
    )
  }
}


export default App


/*

estilos 

body{
    background-color: pink;
}

.box {
    padding: 1em;
    box-sizing: border-box;
    border-radius: 0.2em;
}

.red{
    border: 1px solid red;
}

.blue{
    border: 1px solid blue;
}

.images{
    width: 300px;
    max-width: 300px;
    margin: 1em auto;
}

.card{
    padding: 1em;
    border: 1px solid #e1e1e1;
    background-color: black;
    margin: 1em 0;
    border-radius: 0.2em;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.17);
}

.image{
    width: 100%;

}

.footer{
    padding: 0.5em 0;
    font-size: 15px;
    text-align: center;
    font-family: monospace;
    color: white;
}

.avatar{
    width: 25px;
    border-radius: 50%;
}


*/