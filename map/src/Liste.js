import React, { Component } from 'react';
import Heros from './Heros';

class Liste extends Component {
  render() {
    return (
      <ul>{this.props.listeHeros.map(eachHeros =>
        <Heros persoHero={eachHeros} />
      )}
      </ul>
    );
  }
}

export default Liste;