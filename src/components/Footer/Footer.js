import React from 'react';
import classes from './Footer.css';
import fblogo from '../../assets/images/fb.png';
import instalogo from '../../assets/images/insta.png';
import inlogo from '../../assets/images/in.png';

const footer = () => (
    <div className={classes.Footer}>
        <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
        <ul>
            <li>Privacy Policy</li>
            <li>Terms & conditions</li>
            <li>Questions or Feedback?</li>
            <li>Write to us at <a href='/'>contact@petsearch.in</a></li>
        </ul>
        
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