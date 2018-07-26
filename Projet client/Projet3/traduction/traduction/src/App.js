import React, { Component } from 'react';


import i18n from './i18n';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 'en'
    }
    setInterval(()=>{
    this.setState({
      lng: this.state.lng==='en'?'es':'en'
    })
    },2000)
  }
  
  render() {
    const {lng} = this.state
    return (
      <div>
     
          Hello {i18n.t('name.label', { lng })}
        </div>
    );
  }
}

export default App;


// <I18n ns="translations">
// {
//   (t, { i18n }) => (
// <div className="App">

// <button onClick={() => i18n.changeLanguage('de')}>de</button>
// <button onClick={() => i18n.changeLanguage('fr')}>fr</button>

// <h2>{t('nameTitle')} </h2>

// <p>{t('description.part1')}</p>



// </div>
//   )
// }
// </I18n>