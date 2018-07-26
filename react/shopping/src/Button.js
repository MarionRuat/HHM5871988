import React, { Component } from 'react';

class Button extends Component{

  addinfo(){
    this.setState({
    prix:this.state.prix + 10
    })
  }

render(){
  return(
    <div>
  <button onClick={this.addinfo.bind(this)}>Ajouter un Article</button>
  </div>
  )
}
}

export default Button;
