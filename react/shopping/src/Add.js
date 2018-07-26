import React,{Component} from 'react';

import Article from './Article'
class Add extends Component{

  constructor(props){
      super(props);
      this.state=  {
  prix :'',
  nom : '',
  stock :'',
  }

};




  render(){
    return(
      <div>
      < Article />

<h2>Panier</h2>
<p>Prix total: {this.state.prix}</p>
<p></p>
      </div>

    )
  }

}

export default Add;
