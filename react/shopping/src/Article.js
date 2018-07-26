import React,{Component} from 'react';
import Button from './Button';

class Article extends Component{

      state=  {  prix : 12,
        nom : 'Pessac-Leognan',
        stock : 40,};



render(){
  return(
    <div>
    <p>Prix:{this.state.prix}</p>
    <p>nom :{this.state.nom}</p>
    <p>stock:{this.state.stock}</p>
<Button />
    </div>
  )
}
};

export default Article;
