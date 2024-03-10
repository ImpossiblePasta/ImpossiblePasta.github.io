import React from 'react';
import {Text, Image, Button} from 'react-native';
import './about.css';
import ArtHeader from '../../components/art_header';

function FAQ(){
    document.title="FAQ"
    return(
        <div>
            {ArtHeader("FAQ")}
            <a>text
            </a>
        </div>
    );
}

export default FAQ