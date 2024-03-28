import React from 'react';
import {Text, Image, Button} from 'react-native';
import './play.css';
import ArtHeader from '../../components/art_header';
import Collapse from '../../components/textbox';

import PDF_UNAR from '../../assets/print/UNAR-Letter.pdf';
import PDF_UNA_C from '../../assets/print/UNA-COMMON-Letter.pdf';
import PDF_UNA_U from '../../assets/print/UNA-UNCOMMON-Letter.pdf';
import PDF_UNA_R from '../../assets/print/UNA-RARE-MYTHIC-Letter.pdf';
import PDF_UNA_TOKEN from '../../assets/print/UNA-TOKEN-Letter.pdf';

import ZIP_MSE from '../../assets/print/UnAmused-MSE.zip';
import ZIP_IMG from '../../assets/print/UnAmused-ALL_IMAGES.zip';

function Play(){
    document.title="About"
    return(
        <div>
            {ArtHeader("PRINT & PLAY")}
            <div class="container">

                <Collapse id='Pack'
                    heading={
                        <p>PACK STRUCTURE</p> 
                    }
                    children={
                        <div>
                            <p>
                             The contents of a 15 card pack of UnAmused.
                            </p>
                            <ul>
                                <li> <p> 1x Rare / Mythic </p> </li>
                                <li> <p> 3x Uncommons </p> </li>
                                <li> <p> 9x Commons </p> </li>
                                <li> <p> 1x Land (Any Rarity) </p> </li>
                                <li> <p> 1x <a href='https://cubecobra.com/cube/list/UNAR?view=spoiler&scale=large' target="blank"> UnShifted Reprint </a> </p> </li>
                            </ul>
                            <p>
                                <a href='https://cubecobra.com/cube/samplepack/184b75cd-3bdb-4c31-a332-27c6d44a3856' target="blank"> Click here</a> for a sample pack.
                            </p>
                        </div>
                    }
                />


                <Collapse id='Draft'
                    heading={
                        <p>DRAFT</p> 
                    }
                    children={
                        <div>
                            <p>UnAmused was designed with draft in mind. Commons are the heart of this set, and often the most powerful cards you can 
                                find in UnAmused. Follow the card ratios to create the ideal balance of cards. After you've built the packs, or are just
                                using <a href='https://cubecobra.com/cube/playtest/UNA' target="blank">CubeCobra</a>, draft to your hearts content.
                            </p>

                            <Collapse id='Ratios'
                                heading={
                                    <p>CARD RATIOS</p>
                                }
                                children={
                                    <div>
                                        <p> 
                                            If you're printing out UnAmused, the following ratios are used. 
                                        </p>
                                        <ul>
                                            <li><p> 4x of each common </p></li>
                                            <li><p> 2x of each uncommon </p></li>
                                            <li><p> 1x of each rare and mythic </p></li>
                                            <li><p> 1x of each unshifted card </p></li>
                                        </ul>
                                        <p>This perfectly creates 48 packs of 15 cards.</p>
                                    </div>
                                    
                                }
                            />
                            <Collapse id='SEALED'
                                heading={
                                    <p>SEALED</p>
                                }
                                children={
                                    <div>
                                        <p> Sealed plays incredibly well for UnAmused. Just build a deck out of the contents of 6 packs, easy.
                                             If you print out all 48 packs, this supports sealed for a table of 8. 
                                             If you want a taste of UnAmused, without going through the work of printing 600+ cards, there is
                                              a sealed simulator hosted on <a href='https://cubecobra.com/cube/playtest/UNAD' target='_blank'>CubeCobra</a>.
                                        </p>
                                        <p> After you've built your deck online, you can print just your deck using a MTG print
                                            tool ** cough ** <a href='https://cardconjurer.onrender.com/' target='_blank'>CardConjurer</a> ** cough **. A link 
                                            to a folder of every card from the set can be found below, in PDF & LINKS, or on Imgur if you're so bold.
                                        </p>
                                    </div>
                                }
                            />
                        </div>
                    }
                />

                <Collapse id='CUBE'
                    heading={
                        <p>CUBE</p> 
                    }
                    children={
                        <div>
                            <p>
                               It seems I havn't convinced you. That's OK. If you do want to turn UnAmused into a cube, I recommend
                               you follow this advice.

                            </p>
                            <p>
                               Firsly, print two of each common, and one of every other card. This creates a 367 card cube.

                            </p>
                            <p>
                               Secondly, you may want to ignore the <a href='https://cubecobra.com/cube/list/UNAR?view=spoiler&scale=large' target='_blank'>UNAR Reprint Cards</a> in 
                               a cube. These cards are designed to synergize and be enjoyed along side the set. Without a standard pack format, and a less balanced card pool, these cards may
                               draw attention away from the core of the set.
                            </p>
                            <p>
                               If you did make cube out of this set, please let me know how it plays. Id love to know how UnAmused translates. 
                            </p>
                        </div>
                    }
                />

                <Collapse id='Links'
                    heading={
                        <p>PDF & LINKS</p> 
                    }
                    children={
                        <div>
                            <p> Card Print PDF's (Letter Paper) </p>
                            <ul>
                                <li> <p> <a href={PDF_UNA_C} target="blank"> Common Cards PDF </a> </p> </li>
                                <li> <p> <a href={PDF_UNA_U} target="blank"> Uncommon Cards PDF </a> </p> </li>
                                <li> <p> <a href={PDF_UNA_R} target="blank"> Rare and Mythic PDF </a> </p> </li>
                                <li> <p> <a href={PDF_UNAR} target="blank"> UNAR Reprint Slot PDF </a> </p> </li>
                                <li> <p> <a href={PDF_UNA_TOKEN} target="blank"> Tokens PDF </a> </p> </li>
                            </ul>
                            
                            <p>
                             As an additional resource, the sets assets can be downloaded below.
                            </p>
                            <ul>
                                <li> <p> <a href={ZIP_IMG} target="blank"> All Card Images From The Set Zip </a> </p> </li>
                                <li> <p> <a href={ZIP_MSE} target="blank"> MSE Set Files </a> </p> </li>
                            </ul>
                        </div>
                    }
                />
            </div>
        </div>
    );
}

export default Play