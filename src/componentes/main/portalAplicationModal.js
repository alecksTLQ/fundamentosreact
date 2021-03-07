import React, {Component} from 'react'
import reactDom from 'react-dom' 

/* leccion portales en react */
class PortalModal extends Component{

  constructor(){
    super()

    const METHOD = [
      'desactivarModal'
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })
  }

  desactivarModal(){
    this.props.onModal()
  }

  render(){

    if(!this.props.visible){
      return null
    }

    const styles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to top right, #667eea, #764ba2)',
      opacity: '0.95',
      color: '#FFF'
    }

    return reactDom.createPortal((
      <div style={styles} >
        {this.props.children}
      </div>
    ), document.getElementById('modal-root'))
  }
}


/* clase */
class App extends Component{

  constructor(){
    super()

    const METHOD = [
      'activarModal',
      'desactivarModal'
    ]

    METHOD.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
      visible: false,
      num: 0
    }
  }

  componentDidMount () {
    setInterval(()=>{
      this.setState(state=>({
        num: state.num + 1
      }))
    }, 1000)
  }

  activarModal(){
    this.setState({
      visible: true
    })
  }

  desactivarModal(){
    this.setState({
      visible: false
    })
  }

  render(){

    /* 
    inyectando valores desde el componente padre hacia el hijo usando el props.children 

    */
    return(
      <div>
        <button onClick={this.activarModal}>Modal</button>
        <PortalModal visible={this.state.visible}>
          <button onClick={this.desactivarModal}>Cerrar</button>
          Hola desde un portal modal
          <div>
            {this.state.num}
          </div>
        </PortalModal>
      </div>
    )
  }


}


export default App