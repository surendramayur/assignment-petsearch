import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.css';
import Homepage from './containers/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>        
          <Homepage />        
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
