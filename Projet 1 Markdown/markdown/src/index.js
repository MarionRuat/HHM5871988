import React, {Component} from 'react';
import {render} from 'react-dom'; 
import './style/css/bootstrap.min.css';

class App extends Component {

    render() { 
        return (<h1>Marion</h1>  )
    }
}
 
render(
    <App />,
   document.getElementById('root')
);
