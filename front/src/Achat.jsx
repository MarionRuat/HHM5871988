import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { DialogTitle } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});



class Achat extends React.Component {
  state = {
    titre: [],
    stock: '',
    prix: 'Controlled',
    magasin: 'EUR',
    image:'',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

componentDidMount(){
  fetch('/info/tintin/titre',
    {
      method:  'GET',
      headers:  new  Headers({
        'Content-Type':  'application/json'
      }),
    })
.then(res => res.json())
.then(results => {this.setState({titre:results})
}
  )
}


  render() {
    const { classes } = this.props;
    const {titre} = this.state;
    console.log('couc',{titre})
    return (
      <form className={classes.container} noValidate autoComplete="off">
      {titre.map(titres=> <p>{titres.titre}</p>)}
        <TextField
          id="titre"
          select
          label="titre"
          className={classes.textField}
          value={titre}
          onChange={this.handleChange('titre')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your Titre"
          margin="normal"
        >
       
        </TextField>
        <TextField
          id="full-width"
          label="Label"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
        />
      </form>
    );
  }
}

Achat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Achat);