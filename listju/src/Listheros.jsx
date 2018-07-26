import React, { Component } from 'react';
import Heros from './Heros';

class Listheros extends React.Component {
    render() {
        return(
            <ul> {this.props.listingHeros}
            </ul>
        );

    }
}


export default Listheros;
