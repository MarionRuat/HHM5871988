import React, { Component } from 'react';
import ComponentExample from './ComponentExample';

class Author extends Component{
	
	fonctionAuClic() {
    alert(this.props.name); 
    }

  render(){
		return(
			<div>
			<button onClick={this.fonctionAuClic.bind(this)}>
				Clic
				</button>
				
				<ComponentExample />
			</div>
			
		);
	}
}

class App extends Component {
  render() {
    return (
    	<div>
    		<Author name ="bob"/>  
    	  </div>
    );
  }
}

export default App;
