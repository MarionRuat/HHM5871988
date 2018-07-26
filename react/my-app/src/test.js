import React, { Component } from 'react';

class Password extends Component{

  constructor(props) {
    super(props); 
    this.state = {
    mdp="password"
    };
  }
  render(){
    return(
      <div>   
        <form>
          <label>
            Password :
            <input type="text" id ="password" name="name" />
          </label>
          <p>{this.state.</p>
          <label>
            Message :
            <input type="text" id ="message" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

      )
  }
}

class App extends Component {
  render() {
    return (
      <div>
<Password/>
      </div>
    );
  }
}
