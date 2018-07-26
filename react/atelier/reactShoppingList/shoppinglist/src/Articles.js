import React, { Component } from 'react';

class Articles extends Component {
    // constructor (props) {
    // super (props);
    // this.state = {
    //         prix:8,
    //         nom:'Beaujolais',
    //         stock: 70,
    //      },
    //      {
    //         prix:30,
    //         nom:'Monbazillac',
    //         stock: 10,
    //      },
    //      {
    //         prix:40,
    //         nom:'Saint-Emilion',
    //         stock: 14,
    //      },
    //      {
    //         prix:7,
    //         nom:'Sauvignon',
    //         stock: 23,
    //      },
    //      {
    //         prix:12,
    //         nom:'Tariquet',
    //         stock: 15,
    //      },
    //      {
    //         prix:4,
    //         nom:'Lambrusco',
    //         stock: 50,
    //      },
    //      {
    //         prix:7,
    //         nom:'Sauvignon',
    //         stock: 29,
    //      };
    //  }
    
    render() {
        const {prix, nom, stock, onAddArticle} = this.props

        return (
            <div>
            <p>PRIX : {prix}</p>
            <p>VIN : {nom}</p>
            <p>STOCK : {stock}</p>
            <button onClick={() => onAddArticle()}>Ajouter un Article </button>
            </div>
        );
    }
}
 
export default Articles;