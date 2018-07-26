import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

class Filtre extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      anchorEl: null, 
     }
  this.handleClick=this.handleClick.bind(this)  
  this.handleClose=this.handleClose.bind(this)  
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose(){
    this.setState({ anchorEl: null });
  };

  handleChange(){
    
    
  }

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Button
          aria-owns={this.state.anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClick={this.handleClick}
        >
          <MenuItem onClick={this.handleChange}>Match</MenuItem>
          <MenuItem onClick={this.handleChange}>Equipes</MenuItem>
          <MenuItem onClick={this.handleChange}>Joueurs</MenuItem>
          <MenuItem onClick={this.handleChange}>Terrains</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Filtre;