import React, { Component } from 'react';
import Messages from './Messages';

class Formulaire extends Component {

  createMessage = event => {
    event.preventDefault();
    console.log(this.message.value)
  }

  render() {
    return (
      <div>
        <Messages />
        <form 
          className="form" 
          onSubmit={ e => this.createMessage(e) }
        >

          <textarea 
            required 
            maxLength="140"
            ref ={input=>this.message = input}
            >
          
          </textarea>
          
          <div className="info">140</div>
          
          <button type="submit">Envoyer !</button>

        </form>
      
      </div>
      
    );
  }
}

export default Formulaire;