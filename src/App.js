import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

//Wrapper les composants sinon ca marche pas avec MUI

class App extends Component {
  render() {
    return (
      <MuiThemeProvider> 
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
