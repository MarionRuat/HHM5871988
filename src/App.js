import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import List from './components/List';

class App extends Component {
  state = {
    card: "",
  }

  updateCard = (card) => (
    this.setState({
      card: card,
    })
  )


  render() {;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <SearchBar card={this.state.card} onUpdateCard={this.updateCard} />
          <List card={this.state.card} />
      </div>
    
    );
  }
}

export default App;
