import React, {Component} from 'react'

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
      products: [
        {
          id: 1,
          name: 'camisa unicornio',
          colors: ['#46736', '#05fd88','#a706ee'],
          price: 20
        },
        {
          id: 2,
          name: 'camisa angular',
          colors: ['#46736', '#05fd88','#a706ee'],
          price: 24
        },
        {
          id: 3,
          name: 'camisa react',
          colors: ['#46736', '#05fd88','#a706ee'],
          price: 20
        }
      ]
    }
  }

  render(){

    return(
      <div>
        <h3>Hemos iterado listas de objetos</h3>

        <div>
          {
            this.state.products.map((product)=>{
              return(
                <div>
                  <div>{product.name}</div>
                  <div>
                    {
                      product.colors.map((color)=>{
                        return(
                          <span
                            style={
                              {
                                width: '13px',
                                height: '13px',
                                borderRadius: '0.1em',
                                border: '1px solid gray',
                                display: 'inline-block',
                                margin: '0.1em',
                                background: color
                              }
                            }
                          ></span>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}


export default App