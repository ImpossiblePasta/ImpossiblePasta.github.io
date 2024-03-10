import React from 'react';
import {Text, Image, Button} from 'react-native';
import './about.css';
import ArtHeader from '../../components/art_header';
import Textbox from '../../components/textbox';

function About(){
    document.title="About"
    return(
        <div>
            {ArtHeader("ABOUT")}
            <div class="container">
                <Textbox heading="Head" body="Body"/>
            </div>
        </div>
    );
}

export default About