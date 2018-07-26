import React, { Component } from 'react';

let result = '';
let regex = new RegExp(/^[a-z]{1,6}/g);
let regex1 = new RegExp(/^[a-zA-Z]{6,}/g);
let regex2 = new RegExp(/^[A-Za-z\d@@!%*?&]{6,}$/g);

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value : ''
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
      if (regex.test(this.state.value)){
        result = 'Mot de passe faible';
      } else if (regex1.test(this.state.value)) {
        result = 'Mot de passe moyen';
      } else if (regex2.test(this.state.value)) {
        result = 'Mot de passe fort';
      }
    }  

  handleSubmit(event) {
    if (this.state.value.match(regex1)) { alert('A password was submitted: ' + this.state.value);
    }else {
    alert ('Votre mot de passe est trop faible');
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <p>{result}</p>
        <label>
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Password;
