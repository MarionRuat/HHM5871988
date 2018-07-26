import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Album from './Album';
import Achat from './Achat';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenu chez Tintin</h1>
          <Navigation />
        </header>
        <p className="App-intro">

        </p>

              <Switch>
                <Route path="/page-commande" component={Achat} />
                <Route path="/album/:id" component={Album} />
              </Switch>

      </div>
    );
  }
}

export default App;
