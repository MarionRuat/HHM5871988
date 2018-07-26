import React, {Component} from 'react';
import './style/css/bootstrap.min.css';
import './index.css';
import {sampleText} from './sampleText'
import marked from 'marked';

class Test extends Component {
  
  state = { //state est un objet. Je mets des propriétés et des valeurs dedans.
    text : sampleText,
    }

    componentWillMount(){
      const textSauvegarde = localStorage.getItem('text');
      
      if (textSauvegarde){
        this.setState({text:textSauvegarde})
      }
    }

    componentWillUpdate(nextProps, nextState){//fonction de cycle de vie. Stock dans localStorage l'état du composant avant d'êtr erendu. Stocké dans le navigateur(pour quand on refresh la page)
      localStorage.setItem('text', nextState.text);//setItem on créé l'item (pour le prendre c'est getItem)
    }
  

  editText = (event) => {
    const text = event.target.value
    this.setState({text})//setState est une fcontion à l'intérieure de laquelle j'assigne un objet, en l'occurance l'objet state.
  };

 
  renderText = (blabla) => {
    const renderText =marked(blabla,{sanitize:true});
    return {__html:renderText};
  }

  render() { 
    return ( 
      <div className="container">
        <div className="row">
        
          <div className="col-xs-6">
            <textarea 
              value={this.state.text} // entre {}=> je mets du JS, ca devient dynamique
              rows="35" 
              className="form-control"
              onChange={(e)=>this.editText(e)}

              >

            </textarea>
          </div>

          <div className="col-xs-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
           </div>
        </div>
      
      </div>
     )
  }
}
 
export default Test;