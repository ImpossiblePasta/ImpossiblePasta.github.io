import React from 'react';
import {Text, Image, Button} from 'react-native';
import './about.css';
import ArtHeader from '../../components/art_header';

function Rules(){
    document.title="Rules"
    return(
        <div>
            {ArtHeader("RULES")}
            <a>text
            </a>
        </div>
    );
}

export default Rules