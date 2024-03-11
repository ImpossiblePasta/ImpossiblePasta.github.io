import React from 'react';
import {Text, Image, Button} from 'react-native';
import './about.css';
import ArtHeader from '../../components/art_header';
import Collapse from '../../components/textbox';
import testimg from '../../assets/display_cards/Quandrix Recall Codex.png';

function About(){

    function foo(){
        window.alert(document.getElementById("test"));
        document.getElementById("test").classList.toggle("isExpanded");
    };

    document.title="About"
    return(
        <div>
            {ArtHeader("ABOUT")}
            <div class='container'>
                <Collapse
                    heading={
                        <p>Baboo is supa COOL</p> 
                    }
                    children={
                        <div>
                            <p> Here is some text </p>
                            <img src={testimg} /> 
                        </div>
                    }
                >
                </Collapse>
                <Collapse
                    heading={
                        <p>Headomg</p> 
                    }
                    children={
                        <div>
                            <p> Here is some text </p>
                            <img src={testimg} /> 
                        </div>
                    }
                >
                </Collapse>
            </div>
        </div>
    );
}

export default About