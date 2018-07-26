import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <NavLink exact path to ="/page-commande">Commande </NavLink>
        <NavLink exact path to ="/album/:id">Album</NavLink>
      </div>
    );
  }
}

export default Navigation;