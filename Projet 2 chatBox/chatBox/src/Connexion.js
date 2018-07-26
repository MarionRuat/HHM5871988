// Code React.js
import React, {Component} from 'react';
import './index.css';

class Connexion extends Component {

  goToTchat = event => {
    event.preventDefault();
  };

  state = {}
  render() { 
    return ( 
      <div className="connexionBox" >
        <form className="connexion" onSubmit={e=>this.goToTchat(e)}>
          <input className="text" placeholder="Votre message" required />
          <button type="submit">GO</button> 
        </form>   
      </div>

      )
  }
}
 
export default Connexion;

