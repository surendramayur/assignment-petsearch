import React from 'react';
import classes from './Footer.css';
import Aux from '../../hoc/ReactAux/ReactAux';
import fblogo from '../../assets/images/fb.png';
import instalogo from '../../assets/images/insta.png';
import inlogo from '../../assets/images/in.png';
import logo from '../../assets/images/logo.png';

const footer = () => (
    <div className={classes.Footer}>
        <Aux>
            About, Careers, Contact, Blog
        </Aux>
        <div>Privacy policy- Use the same content</div>
        <div>Terms & conditions</div>
        <p>Questions or Feedback?
        Write to us at <a href='/'>contact@petsearch.in</a></p>
        <div>          
            <a href='https://www.facebook.com/Petsearch-438147443241313/'>
                <img src={fblogo} alt="Facebook" />
            </a>
            <a href='https://www.instagram.com/gopetsearch/ '>
                <img src={instalogo} alt="Instagram" />
            </a>
            <a href='https://www.linkedin.com/company/gopetsearch/ '>
                <img src={inlogo} alt="LinkedIn" />
            </a>
        </div>
    </div>
);

export default footer;