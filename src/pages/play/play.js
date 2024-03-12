import React from 'react';
import {Text, Image, Button} from 'react-native';
import './play.css';
import ArtHeader from '../../components/art_header';

function Play(){
    document.title="About"
    return(
        <div>
            {ArtHeader("PRINT & PLAY")}
            <div class="container">
                <h3>To Be Announced</h3>
            </div>
        </div>
    );
}

export default Play