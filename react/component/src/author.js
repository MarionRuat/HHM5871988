import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Author extends Component{
	render(){
		return(
			<div>
			<h1>The name is, {this.props.name} </h1>
			</div>
		);
	}
}

export default Author;
