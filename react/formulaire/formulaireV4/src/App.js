import React, { Component } from 'react';
import logo from './logo.svg';
import SignUp from './SignUp';
import Label from './Label';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Label htmlFor="email" labelValue="E-mail "/>
        <SignUp className="form-control" id="email" type="text"/>
        <Label htmlFor="password" labelValue="Enter your password"/>
        <SignUp className="form-control" id="password" type="password" name="" />
        <Label htmlFor="passwordV" labelValue="Verify your password"/>
        <SignUp className="form-control" id="passwordV" type="password" name="" />
        <Label htmlFor="prenom" labelValue="First name"/>
        <SignUp className="form-control" id="name" type="text" name="" />
        <Label htmlFor="nom" labelValue="Last Name"/>
        <SignUp className="form-control" id="lastname" type="text" name="" />
        <input type="submit" value="Soumettre"/>


      </div>
    );
  }
}

export default App;
