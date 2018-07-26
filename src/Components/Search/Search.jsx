import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import ImageResult from '../Image/ImageResult'

class Search extends Component {
  

  state ={//un objet seul et une seule variable
    searchText :'',
    amout : '5',
    apiUrl :'https://pixabay.com/api/',
    apiKey :'9181092-59e87fae2d51bc61d2b693007',
    images:[]
  };

  onTextChange = e => {
    this.setState({[e.target.name]:e.target.value}, () => {
      axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}
          &per_page=${this.state.amount}&q=${this.state.searchText}
          &image_type=photo`)
        
      .then(res=> this.setState({images:res.data.hits}
      ))//on obtien une promesse d'ou le then
      .catch(error => console.log("Problème avex axios"))
    }); //fonction callback
    
  };




  OnAmountChange = (e, index, value) => this.setState({ amout : value });


  render() {
console.log(this.state.images)
    return (
      <div>

      <TextField
      name="searchText"
      label="search"
      value={this.state.searchText}
      onChange={this.onTextChange}
      fullWidth={true}
    />
      <br />

      <Select
      native
      name="amount"
      value={this.state.amout}
      onChange={this.OnAmountChange}
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={30}>30</option>
    </Select>
       <br />

      {this.state.images.length > 0 ? (<ImageResult images={this.state.images} /> ) : null}

      </div>
    );
  }
}

export default Search;