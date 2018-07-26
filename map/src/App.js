import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from '@material-ui/core/List';
// import Liste from './Liste';

const listingHeros = [{
  name: 'Bruce Banner',
  alias: 'Hulk',
  age: 28
  },{
  name: 'Tony Stark',
  alias: 'Iron Man',
  age: 35
  },{
  name: 'Henry Pym',
  alias: 'Ant Man',
  age: 29
  },{
  name: 'Peter Parker',
  alias: 'Spiderman',
  age: 22
  },{
  name: 'Peter Quill',
  alias: 'Star Lord',
  age: 26
  },{
  name: 'James Howlett',
  alias: 'Wolverine',
  age: 33
  },{
  name: 'Matt Murdok',
  alias: 'Daredevil',
  age: 34
  }]

  class App extends Component {
    constructor(props){
        super(props);
        this.state = {listingHeros}
    }

  render() {
    const {listingHeros} = this.state;
    return (
      <div className="App">
        <List>
        {listingHeros.map(heros => (<li>{heros.name}/{heros.alias}/{heros.age}</li>))}
        </List>
      </div>
    );
  }
}

export default App;
