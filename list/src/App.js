import React, { Component } from 'react';
import './App.css';

import List from './List';

const listPersonnages = [{
  name: 'Bruce Banner',
  alias: 'Hulk',
  age: 28
}, {
  name: 'Tony Stark',
  alias: 'Iron Man',
  age: 35
}, {
  name: 'Henry Pym',
  alias: 'Ant Man',
  age: 29
}, {
  name: 'Peter Parker',
  alias: 'Spiderman',
  age: 22
}, {
  name: 'Peter Quill',
  alias: 'Star Lord',
  age: 26
}, {
  name: 'James Howlett',
  alias: 'Wolverine',
  age: 33
}, {
  name: 'Matt Murdok',
  alias: 'Daredevil',
  age: 34
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    name:"marion" }
  }
  render() { 
    return (
      <div>
      <p>{this.state.name}</p>
      <List maprop={this.state.name} />
      </div>
     )
  }
}
 
export default App;
