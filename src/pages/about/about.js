import React from 'react';
import './about.css';
import ArtHeader from '../../components/art_header';
import Collapse from '../../components/textbox';

function About(){
    document.title="About"
    return(
        <div>
            {ArtHeader("ABOUT")}
            <div class='container'>
            <div class='widthHandler'>
                <p>
                UnAmused! The spell slinging, high rolling, silver border set unlike anything you've ever played. After years of tinkering, playtesting, getting burnt out, and tinkering again; the set is ready for play. Each day new cards will be revealed culminating in its release on April 1st. Be there, be square.
                </p>
                <p>
                Check out the gallery to see some cards. I worked real damn hard on this.
                </p>
            </div>
        </div>
        </div>
    );
}

export default About