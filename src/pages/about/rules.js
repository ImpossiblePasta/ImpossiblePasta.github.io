import React from 'react';
import './about.css';
import ArtHeader from '../../components/art_header';
import Collapse from '../../components/textbox';

function Rules(){

    document.title="Rules"
    return(
        <div>
            {ArtHeader("RULES")}
            <div class='container'>
            <div class='widthHandler'>
                <Collapse id='Rule 0'
                    heading={
                        <p>RULE 0: Silver Border Magic</p> 
                    }
                    children={
                        <div>
                            <p> DO WHAT'S FUN!  </p>
                        </div>
                    }  />
                <Collapse id='Rule 1'
                    heading={
                        <p>RULE 1: There Are No Rules</p> 
                    }
                    children={
                        <div>
                            <p> No. Literally. For as long as silver-bordered magic was a thing, un-cards
                                were not covered in the comprehensive rules of the game. To remedy this,
                                spellcasts across the 2010s would traverse the multiverse and enter the 
                                blogatog. (Or just look for rulings on Gatherer.) Unfortunately, I don't 
                                have a Tumblr, but I do have a Reddit account. If you do truly need a ruling,
                                and I haven't posted about the card already, dm me at <a href="https://www.reddit.com/user/ImpossiblePasta/" target="_blank">u/ImpossiblePasta</a> or 
                                any place I'm active. If your lucky, I'll see your message.
                            </p>
                            <p> 
                                Below are some rulings I thought might be relavant. They are catagorized by 
                                mechanics then individual cards.
                            </p>
                        </div>
                    } />
                <Collapse id='Rule 2'
                    heading={
                        <p>RULE 2: When There Needs To Be Rules</p> 
                    }
                    children={
                        <div>
                            <p> I know what I just said, but sometimes you need a ruling. There 
                                are going to be circumstances where a messed up board state leaves
                                you asking, "What now?". 
                                In most cases, players can come to an agreement on how an
                                effect should resolve. But, when that doesn't work, I recommend asking
                                someone from outside the game. 
                            </p>
                        </div>
                    } />

            </div>
        </div>
        </div>
    );
}

export default Rules







/*


                <Collapse id='Mechanics'
                    heading={
                        <p>Mechanics</p> 
                    }
                    children={
                        <div>
                            <Collapse id='Dice'
                            heading={
                                <p>Dice</p> 
                            }
                            children={
                                <div>
                                    <p> Dice
                                    </p>
                                </div>
                            } />
                        </div>
                    } />

*/