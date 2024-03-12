import React from 'react';
import './about.css';
import ArtHeader from '../../components/art_header';
import Collapse from '../../components/textbox';
import Qwrl from '../../assets/icons/qwrlio.png'

function About(){
    document.title="About"
    return(
        <div>
            {ArtHeader("ABOUT")}
            <div class='container'>
            <div class='widthHandler'>
                <p>
                Unamused is a custom unset made by me, Evella. I've been a fan of magic for years and the thing that truly drew me into the game was silver bordered cards. It’s the endless possibilities and fun of MTG, now with 1,000% more squirrels. What's not to love?
So, like any rational person would, I began making custom cards. What started as a few stray designs, began forming into a full-fledged set. After feverish design and testing the set was almost complete. That was 2 years ago. It turns out you can tinker with something forever if you let yourself. Eventually, enough was enough and it was time to release a final version.
                </p>
                <p>
                Once that I finally committed myself to actually finishing this damn thing, I begun the Journey of daily posts, website making, proofreading, and testing.
I know that I'll be making last minute changes all the way up to the final hour; but even with all the little pieces of regretful mistakes and perfection just out of reach, it will always be worth more to share my passion with others. I hope my projects can bring someone as much joy as it brings me, and I truly hope you're that someone.
                </p>
                <p>
Without further a do. UnAmused
                </p>
                
            </div>
            <img class='qwrl' src={Qwrl}/>
        </div>
        </div>
    );
}

export default About