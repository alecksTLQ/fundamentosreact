import React, {Fragment} from 'react'


const Computacion =()=>(
  <>
    <li>monitor</li>
    <li>mouse</li>
    <li>teclado</li>
  </>
)

const Ropa =()=>(
  <Fragment>
    <li>Playeras</li>
    <li>Jeans</li>
    <li>Shorts</li>
  </Fragment>
)

/* clase */
class App extends React.Component{

  constructor(){
    super()
    this.state = {
    }
  }

  render(){

    return(
      <div>
        <ul>
            <Computacion></Computacion>
            <Ropa></Ropa>
        </ul>
      </div>
    )
  }


}


export default App