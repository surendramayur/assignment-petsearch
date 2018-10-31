import React, { Component } from 'react';
import { Route } from 'react-router';

import classes from './Homepage.css';
import Layout from '../../hoc/Layout/Layout';
import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Footer/Footer';
import GetApp from '../../components/GetApp/GetApp';
import About from '../../components/About/About';
import Careers from '../../components/Careers/Careers';
import Contact from '../../components/Contact/Contact';
import Partner from '../../components/Partner/Partner';
import Features from '../../components/Features/Features';
import Form from '../Form/Form';
import Food from '../Food/Food';
import FoodItems from '../Food/FoodItems/FoodItems';

class Homepage extends Component {    
    

    render() {
        window.scrollTo(0, 0);
        return (
        <div className={classes.Homepage}>
            <Toolbar />
        <Route path="/form" exact component={Form} />
            <div>
                <Route path="/" exact component={Layout} />
                <Route path="/" exact component={GetApp} />
                <Route path="/" exact component={Features} />
                <Route path="/" exact component={Food} />  
            </div>                       
            <Route path="/about" exact component={About} />
            <Route path="/careers" exact component={Careers} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/partner" exact component={Partner} />
            <Route path="/fooditem" exact component={FoodItems} />
            <Footer />
        </div>
        );
    }
}

export default Homepage;
