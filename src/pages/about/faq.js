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
                        <p>Why Make An About Page With No Real Answers?</p> 
                    }
                    children={
                        <div>
                            <p> Well, when I started making the site an FAQ seemed like a good idea.
                            </p>
                        </div>
                    } />
                    <Collapse id='Brain No Work'
                    heading={
                        <p>Why Are There So Many Spelling Mistakes And Errors?</p> 
                    }
                    children={
                        <div>
                            <p> Dyslexia is a hell of a drug.
                            </p>
                        </div>
                    } />
                    <Collapse id='More'
                    heading={
                        <p>Are You Going To Continue Making Sets?</p> 
                    }
                    children={
                        <div>
                            <p> Always. My next project is polishing an older set I made. Then releasing it with accesible formatting. Also UnAmused 2, UnFunny, is currently
                                in the works.
                            </p>
                        </div>
                    } />
                    <Collapse id='Patch'
                    heading={
                        <p>Will You Make Any Changes To UnAmused After It Is Released?</p> 
                    }
                    children={
                        <div>
                            <p> At first I was planning on making UnAmused 1.1. At this point, I am more intereseting in making a sequel set, and while
                                I might change my mind, I think I could keep trying to improve UnAmused until the end of time. 
                                UnAmused will stay how it is, quirks and all.
                            </p>
                        </div>
                    } />
                    <Collapse id='Keep'
                    heading={
                        <p>How Long Do You Intend To Keep Answering These Pointless Questions?</p> 
                    }
                    children={
                        <div>
                            <p> Until an FAQ page seems justified.
                            </p>
                        </div>
                    } />
                    <Collapse id='Updates'
                    heading={
                        <p>Will You Continue To Add To The FAQ Page?</p> 
                    }
                    children={
                        <div>
                            <p> If I'm asked any questions online, I will include the answer here. It's easy enough to do.
                            </p>
                        </div>
                    } />
                    <Collapse id='Git'
                    heading={
                        <p>Why GitHub Pages?</p> 
                    }
                    children={
                        <div>
                            <p> I'm a fool. A cheap fool.
                            </p>
                        </div>
                    } />
                    <Collapse id='Funny'
                    heading={
                        <p>Do You Think You're Funny?</p> 
                    }
                    children={
                        <div>
                            <p> God I hope.
                            </p>
                        </div>
                    } />
                    <Collapse id='Over'
                    heading={
                        <p>Is This FAQ Joke Over?</p> 
                    }
                    children={
                        <div>
                            <p> .
                            </p>
                        </div>
                    } />

            </div>
            </div>
        </div>
    );
}

export default FAQ