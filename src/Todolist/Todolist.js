 import React, {Component} from 'react';

class Todolist extends Component {

  constructor(){
    super();//obligatoire, ne marche pas sinon
    this.state = {
      userInput:'',//il est égal à une chaine de caractère vide pour l'instant il est vide car rempli par l'utilisateur
      items :[], //on sete un items à userInput, on va avoir un tableau vide. [] car c'est du JS. Après je dois crééer une méthode pour updtate le userInput. Je dois ajouter une méthode dans l'attribut concerné. Cette méthode d'appellera onChange
    }
  } // pour contruire une méthode avec un state j'ai besoiin d'un constructor

    onChange(event){ //une fonction
      this.setState({ //pour sete, cad updater
        userInput: event.target.value
      })
    }
//quand on clic sur le bouton, il faudra ajouter l'items dans le tableau items
//on ajoute donc une méthode "ajouter" pour ajouter les valeurs
addTodo(event){
  event.preventDefault();//on prévient le Dom pour qu'il ne reload pas la page. C'est du natif JS
  this.setState({
  userInput:'', //pour que le userInput se vide à chaque clic
  items:[...this.state.items,this.state.userInput]//j'ajoute les valeurs de litems avec l userInput
});
}

deleteTodo(event){//on supprime ce qu'on a créer
  event.preventDefault();//la fonction prévient le DOM pour le pas reloader la page
  const array=this.state.items;// on créer une constante pour les variable qui correspond au tableau qu'il soit plein ou vide.
  const index=array.indexOf(event.target.value); //je créer une nouvelle variable, pour déterminer quel est l'index de l'item à supprimer
  array.splice(index,1);
  this.setState({
    items:array
  });
}

//pour voir la création de ce qu on ajoute on créer une méthode
renderTodos(){
  return this.state.items.map((item)=>{
    return (
      <div className= "list-group-item" key={item}>
        {item}  <button className="btn btn-danger" onClick={this.deleteTodo.bind(this)}>X</button> //on attribut la fonction deleteTodo au boutton avec onClick que l'on bind au this
      </div>
    );
  });
}
    render(){
      return(
        <div>
          <h1 align="center">Ma Todolist</h1>
          <form className="form-row align-items-center">
            <input
            className="form-control mb-2"
            value={this.state.userInput}
            type="text"
            placeholder="Renomer un item"
            onChange={this.onChange.bind(this)}//on créer une action sur l'input qui appelle une fonction, à créer. le bind permet de rappeler le context du component
            />
          <button
          className="btn btn-primary" align="center"
          onClick={this.addTodo.bind(this)}
          >Ajouter</button>
          </form>
          <div className="list-group">
            {this.renderTodos()}
          </div>
        </div>
    )
}
}

export default Todolist;
