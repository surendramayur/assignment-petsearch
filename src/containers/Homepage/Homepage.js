import React, { Component } from 'react';

import classes from './Homepage.css';
import Aux from '../../hoc/ReactAux/ReactAux';
import Layout from '../../hoc/Layout/Layout';
import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Footer/Footer';
import GetApp from '../../components/GetApp/GetApp';

class Homepage extends Component {
    render() {
        return (
        <div className={classes.Homepage}>
            <Aux>
            <Toolbar />
            <Layout />
            <GetApp />
            <Footer />
            </Aux>
        </div>
        );
    }
}

export default Homepage;
