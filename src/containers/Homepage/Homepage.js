import React, { Component } from 'react';
import { Route } from 'react-router';

import classes from './Homepage.css';
import Layout from '../../hoc/Layout/Layout';
import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Footer/Footer';
import GetApp from '../../components/GetApp/GetApp';
import About from '../About/About';
import Careers from '../Careers/Careers';
import Contact from '../Contact/Contact';
import Partner from '../Partner/Partner';

class Homepage extends Component {
    render() {
        return (
        <div className={classes.Homepage}>
            <Toolbar />
            <div>
                <Route path="/" exact component={Layout} />
                <Route path="/" exact component={GetApp} />   
            </div>                       
            <Route path="/about" exact component={About} />
            <Route path="/careers" exact component={Careers} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/partner" exact component={Partner} />
            <Footer />
        </div>
        );
    }
}

export default Homepage;
