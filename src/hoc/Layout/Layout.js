import React, { Component } from 'react';
import Aux from '../ReactAux/ReactAux';

import Logo from '../../components/Logo/Logo';
import Tagline from '../../components/Tagline/Tagline';
//import classes from './Layout.css';

class Layout extends Component {
    
    
    render() {
        return (
            <Aux>
                <Logo />
                <Tagline />
            </Aux>
        );
    }
} 


export default Layout;