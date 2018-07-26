import React, { Component } from 'react';

class Heros extends Component {
  render() {
    return (
      <div>
        <li>{this.props.persoHero.name}/{this.props.persoHero.alias} / {this.props.persoHero.age}</li>
      </div>
    );
  }
}

export default Heros;