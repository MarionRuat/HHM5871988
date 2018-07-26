import React, {Component} from 'react';

class MyTimer extends Component{
  constructor(){
    super();
    this.state={
      count:0;
    }
  }

setInterval(){
  this.setState({
    count:this.state.count + 1;
  })

}

  render(){
    return(
<h1>Marion </h1>
    )
  }
}

export default MyTimer;
