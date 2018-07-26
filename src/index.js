import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import citations from './citations';

class App extends Component {
  state  = {};

  genererCitation = event => {
    const keyArray = Object.keys(citations);
    const randomKey = keyArray[Math.floor(Math.random()* keyArray.length)];
    this.setState(citations[randomKey]);
};

  render(){

    return (
      <div>
        <p>
{this.state.citation}
{this.state.auteur}
        </p>
      <button onClick={e=>this.genererCitation(e)}> Une autre citation !</button>
    </div>
    )
  }
}

render(
  <App/>,
  document.getElementById('root')
);


export default App;
