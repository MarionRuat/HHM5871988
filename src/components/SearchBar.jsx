import React, {Component} from 'react';
import './SearchBar.css';
import filelist from '../file.json';

class SearchBar extends Component {
        state = {
            text: '',
        }

    search (text) {
        this.setState({
            text: text,
        })
        this.props.onUpdateCard(text);   
    }

    

    render() {
        return (
                <input 
                className="searchbar"
                placeholder="Search..."
                type="text" 
                onChange={(event) => this.search(event.target.value) } 
                value={this.state.text} 
                 />
        )
    }
};

export default SearchBar;
  