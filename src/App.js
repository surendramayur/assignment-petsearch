import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import classes from './App.css';
import Homepage from './containers/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className={classes.App}>        
          <Homepage />        
        </div>
      </HashRouter>      
    );
  }
}

export default App;
