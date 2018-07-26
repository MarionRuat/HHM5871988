import React, { Component } from 'react';

class Panier extends Component {
    render() { 
        return ( 
            <div>
            <p>Panier : </p>
            <p> Total : {this.props.total}</p>
            <p> Quantité Article : {this.props.quantite}</p>
            </div>
         )
    }
}
 
export default Panier;

