import React, { Component } from 'react';

import classes from './App.css';
import Aux from './hoc/ReactAux/ReactAux';
import Layout from './hoc/Layout/Layout';
import Toolbar from './components/Navigation/Toolbar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Aux>
          <Toolbar />
          <Layout />
          <Footer />
        </Aux>
      </div>
    );
  }
}

export default App;
