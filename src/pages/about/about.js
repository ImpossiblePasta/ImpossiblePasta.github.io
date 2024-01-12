import React from 'react';
import Header from '../../components/header.js';

function About(){
    document.title="About"
    return(
        <a>
            <Header></Header>
            <h1>About Page</h1>
        </a>
    );
}

export default About