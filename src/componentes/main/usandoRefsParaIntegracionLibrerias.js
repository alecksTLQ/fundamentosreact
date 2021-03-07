import React, {Component} from 'react'
import Chart from 'chart.js'
import './global.css'


/* 

  usando refs para integrar librerias de terceros que necesitan acceder al DOM
  real

 */

 class Graficas extends Component {

  constructor(){
    super()

    this.grafica = React.createRef()

  }

  componentDidMount(){
    const ctx = this.grafica.current.getContext('2d')

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  })

  }
   render(){

    return(
      <div>
        <canvas
          ref={this.grafica}
          width='400'
          height='400'
        ></canvas>
      </div>
    )

   }
 }

/* clase */
class App extends Component{

  constructor(){
    super()

    this.state = {

    }
  }


  render(){

    return(
      <div >
        <h1>Usando Refs para integrar librerias 🥶
          <Graficas></Graficas>
        </h1>
      </div>
    )
  }
}


export default App