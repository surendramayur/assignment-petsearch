import React, { Component } from 'react';

import classes from './About.css';

class About extends Component {
    render() {
        return (
            <div className={classes.About} >
                <h1>About Us:</h1>
                <p>
                    Petsearch is a one of a kind, unique application where users can look for different kinds of pet animals available in their surroundings. Pet owners can post about their pets they wish to give for adoption. It also provides a platform for breeders to post ads about the various kinds of breeds bred by them.
                </p>
                <p>
                    You will find a wide variety of dogs, cats, birds, fishes and many more pet types here in Petsearch. Users can browse through all kinds of breeds available in their city and contact the owners directly. Users can also post about stray animals and provide the details of their location or the nearest pet center. They can give their contact details so that anyone interested in that post shall get in touch with them right away!
                </p>
                <p>
                    Petsearch provides a common platform for both pet breeders and aspiring pet owners to find a good home for all pet animals.
                </p>
            </div>
        );
    }
}

export default About;