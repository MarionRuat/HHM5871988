import React, { Component } from 'react';
import Personne from './Personne';

const

class Liste extends Component {
constructor(props) {
    super(props);
    this.state = {
      name
  }
};

  render() {
    const{perso}=this.props; //on déstructire l'objet perso un objet dans lequel on a un autre objet//
    return (
      <li className="Liste">
        {perso.name}/{perso.alias}/{perso.age}
      </li>

      </div>
    );
  }
}

export default Liste;
