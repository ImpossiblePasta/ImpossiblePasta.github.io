import React from 'react';
import './about.css';
import ArtHeader from '../../components/art_header';
import Collapse from '../../components/textbox';

function FAQ(){
    document.title="FAQ"
    return(
        <div>
            {ArtHeader("FAQ")}
            <div class='container'>
            <div class='widthHandler'>
                <Collapse id='What'
                    heading={
                        <p>What Is UnAmused?</p> 
                    }
                    children={
                        <div>
                            <p> Please see the about page...  </p>
                        </div>
                    }  />
                <Collapse id='Who'
                    heading={
                        <p>Who Are You?</p> 
                    }
                    children={
                        <div>
                            <p> Please see the about page...
                            </p>
                        </div>
                    } />
                <Collapse id='Why'
                    heading={
                        <p>Why Is This Site Unfinished?</p> 
                    }
                    children={
                        <div>
                            <p> Sometimes you decide to make a site from scratch when you have little experience.
                                And sometimes you decide to host the site on github pages and it causes way more 
                                of a hassel than you expected.
                            </p>
                            <p> The site will be worked on until April 1st.
                            </p>
                        </div>
                    } />

            </div>
            </div>
        </div>
    );
}

export default FAQ