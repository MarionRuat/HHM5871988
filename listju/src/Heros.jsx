import React, { Component } from 'react';


class Heros extends React.Component {
    render() {
        return(
            <li> {this.props.eachHeros.name} / {this.props.eachHeros.alias} / {this.props.eachHeros.age} </li>
        );

    }
}

export default Heros;


