import React, { Component } from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Connexion from './Connexion';
import Formulaire from './Formulaire';



class App extends Component {

  state={
    messages : {}
  }

  addMessage = (message) => {
    const messages = {...this.state.messages};
    
  }

  render() {
    return (
      <BrowserRouter>
        <div>

        <Route exact path="/" component={Connexion} />
        <Route path="/pseudo/" component={Formulaire} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
