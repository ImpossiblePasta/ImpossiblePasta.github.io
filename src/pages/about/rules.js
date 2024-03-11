import React from 'react';
import {Text, Image, Button} from 'react-native';
import './about.css';
import ArtHeader from '../../components/art_header';
import Collapse from '../../components/textbox';

function Rules(){
    document.title="Rules"
    return(
        <div>
            {ArtHeader("RULES")}
            <div class='container'>
                <Collapse
                    heading={
                        <p>RULE 0: Silver Border Magic</p> 
                    }
                    children={
                        <div>
                            <p> Here is some text </p>
                        </div>
                    }
                >
                </Collapse>
            </div>
        </div>
    );
}

export default Rules