import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listheros from './Listheros';


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

    this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e){
        const newList = [...this.state.listingHeros]
        newList.sort(function (a, b) {
            return a.age - b.age;
        })
        this.setState({
            listingHeros : newList
        })
    }

    render() {
        console.log('log', this.state.listingHeros);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <h3>Voici mon super listing de la mort qui tue ! </h3>
            <button onClick={this.handleChange.bind(this)}> Trier par age</button>
            <Listheros maliste={this.state.listingHeros} />



        </div>
    );
  }
}

export default App;
