import React, { Component } from 'react';
import Panier from './Panier';
import Articles from './Articles';
import logo from './logo.svg';
import './App.css';

class App extends Component {
      constructor (props) {
        super (props) 
        this.state = {
            prix:8,
            nom:'Beaujolais',
            stock: 70,
            total: 0,
            quantite:0
           },
           {
            prix:30,
            nom:'Monbazillac',
            stock: 10,
            total: 0,
            quantite:0
           },
          {
           prix:40,
          nom:'Saint-Emilion',
          stock: 14,
          total: 0,
            quantite:0
        }
      }

  addarticle = () => {
    this.setState({
      total: this.state.total + this.state.prix,
      stock: this.state.stock - 1,
      quantite:this.state.quantite +1
    })
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Articles prix={this.state.prix} nom={this.state.nom} stock={this.state.stock} onAddArticle={this.addarticle}/>
        <Panier quantite={this.state.quantite} total={this.state.total} />
      </div>
    )}
}

export default App;
