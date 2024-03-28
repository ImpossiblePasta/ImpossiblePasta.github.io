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

                <p> 
                    This is a rules refrence for anyone who desires the choaos of a custom unset, yet finds comfort in the grounded nature of magics rules. 
                    If you disagree with any rulings stated below, good! These are just my ideas on how the cards should work. 
                    I'm a game designer, not a judge. If you want to play any of the cards differently, feel free. Play what makes you happy.  

                </p>

                <Collapse id='Rule 0'
                    heading={
                        <p>RULE 0: Silver Border Magic</p> 
                    }
                    children={
                        <div>
                            <p> DO WHAT'S FUN!!!  </p>
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
                                someone from outside the game. Anyone, preferably someone who know the rules of the game.
                                Just keep the game going and have fun, sometimes, even a coin will do.
                            </p>
                        </div>
                    } />


                <Collapse id='Mechanics'
                    heading={
                        <p>MECHANICS</p> 
                    }
                    children={
                        <div>
                            <p> Below are rulings on each of the custom mechanics of UnAmused. </p>

                            <Collapse id='Dice'
                                heading={
                                    <p>DICE</p> 
                                }
                                children={
                                    <div>
                                        <p> If you would like to read up on the official ruling of dice, here is a link to the Magic Judge Rules Resource on <a href="https://blogs.magicjudges.org/rules/mtr3-9/" target="_blank">Die Rolling</a> </p>

                                        <Collapse id='Dice-Multi'
                                            heading={
                                                <p>When You Are Instructed To Roll Multiple Dice At Once</p> 
                                            }
                                            children={
                                                <div>
                                                    <p> If an effect would have you roll more than one die, roll all dice at once. You may then choose the 
                                                        order in which the dice 'resolve'. For example, lets say there is a <a href="https://i.imgur.com/BRXtlsK.png" target="_blank">Modron Token</a> in
                                                        play and you attack with <a href="https://i.imgur.com/jXsBik6.png" target="_blank">Boomslinger</a>. After you roll two D6, you
                                                        decide which of the two was the last die rolled. 
                                                    </p>
                                                </div>
                                        }  />

                                        <Collapse id='Dice-Result'
                                            heading={
                                                <p>What Is The Result Of A Die?</p> 
                                            }
                                            children={
                                                <div>
                                                    <p> Many effects, like that found on <a href="https://i.imgur.com/kLEWKge.png" target="_blank">That On All Fours</a>, will look for when a specific number is rolled. 
                                                    This is looking for a roll's 'result'. The result of a roll is its rolled value after all modifiers. This means if you roll a 4 on a D6 and increase it to a 7 with 
                                                    an effect like <a href="https://i.imgur.com/Wsm2J3g.png" target="_blank">Modulate</a>, the result is 7 and <a href="https://i.imgur.com/kLEWKge.png" target="_blank">That On All Fours</a> will
                                                     not trigger.
                                                    Note that ingnored rolls are never seen.
                                                    </p>
                                                </div>
                                        }  />

                                        <Collapse id='Dice-Reroll'
                                            heading={
                                                <p>How Do I Reroll Dice?</p> 
                                            }
                                            children={
                                                <div>
                                                    <p> Whether it be a <a href="https://i.imgur.com/ck6VWKQ.png" target="_blank">Krark's Toe</a> or you're <a href="https://i.imgur.com/lB5MzE4.png" target="_blank">Spinning It To Win It</a>, 
                                                    you will likely be rerolling a lot of dice. 
                                                    </p>
                                                    <p>You can only reroll a die before the effect which caused the roll resolves. If your opponent casts a <a href="https://i.imgur.com/PsKsHRn.png" target="_blank">What's In The Box</a> and rolls a 3, before the target
                                                    takes 3 damage, you can have them reroll the die. </p>
                                                    <p> Yes, you can force your opponents to reroll a die. </p>
                                                    <p> Yes, you can reroll a rerolled die. If you use a Krark's toe and are unhappy with the result, you can still use another. </p>
                                                    <p>When a die is rerolled, the initial result is ignored. This means you must use the new result, and the initial result will not trigger on roll effects. </p>
                                                </div>
                                        }  />
                                    </div>
                            }  />

                            <Collapse id='Dice Tray'
                                heading={
                                    <p>DICE TRAY</p> 
                                }
                                children={
                                    <div>
                                        <p> Dice added to your dice tray sit outside the game. When a card asks you to add a DX to your
                                            dice tray, simply add the die to your pile. At any time you would roll dice, you may replace
                                            a single die from the roll with one from your dice tray. This consumes the die. Then roll the die to 
                                            get the result.  </p>
                                        <p> You may consume multiple dice at a time to replace multiple dice in a single roll. E.g. If you were to roll three D6. Consume a D8 
                                            and a D10 to roll a D6, D8, and D10 instead.  </p>
                                        <p> Consuming dice must be declared before the die is rolled. No backsies. </p>
                                        <p> If a die from your dice tray is rerolled, like from a Krark's Toe, use the same die for the reroll.
                                             Alternatively, if you reroll a die, you can use a die from your dice tray for the new roll. </p>
                                        <p> You may only use dice from your dice tray for dice YOU roll. Most cards will say what player is the one
                                            to roll the dice. Otherwise, the roller is the controller of the card or ability. </p>
                                    </div>
                                }  />

                            <Collapse id='Dice Tokens'
                                heading={
                                    <p>DIE TOKENS</p> 
                                }
                                children={
                                    <div>
                                        <p> Die tokens are silly lil guys represented by a die on the board. The result of the die is 
                                            equal to that creatures base power and toughness. Unlike +1/+1 counters, this creatures power
                                            is a real die. This means cards which refrence dice can interact with die creatures. </p>
                                        <p> You may use a die from your dice tray when creating the token. Any reroll effect can reroll a 
                                            Die token. This includes after the die is in play.  </p>
                                    </div>
                                }  />

                            <Collapse id='Enchance'
                                heading={
                                    <p>ENCHANCE</p> 
                                }
                                children={
                                    <div>
                                        <p> To enchance a card, exile it. As long as it is in exile, whenever a player rolls that cards
                                            mana value on a die, a trigger for that player to cast that spell without paying its mana cost goes on the stack.
                                            If multiple enchance triggers go on the stack at the same time, the player which rolled the die controls the
                                            triggers and may choose the order.
                                             </p>
                                        <p> Only the mana value of the card is concidered, not the cost to cast it. That means cards like adventures have mana value of only 
                                            to permanent half. Split spells have mana value equal to the total of all sides. 
                                             </p>
                                        <p> If a spell with an alternate playing cost is enchanced you may choose to cast that spell for its alternate cost, even if it
                                            is not the same as the value you rolled. For example, if you enchance a mana value 4 card with an adventure, then roll a 4. You may
                                            choose to cast the mana value 3 adventure half for free. Cool, right?
                                        </p>
                                        <p> If a spell with an additional cost is enchanced, you may choose to pay the additional costs when casting the spell. Enchance says,
                                            "without paying its mana cost", and things like kicker are additional costs. You can still kick and enchanced spell, you
                                            just have to pay the kicker. Lame, right?
                                        </p>
                                        <p> If an enchanced card is removed from exile, then returns later. It 
                                            is concidered a new instance of the card and is no longer enchanced.
                                        </p>
                                    </div>
                                }  />

                            <Collapse id='Relive'
                                heading={
                                    <p>RELIVE</p> 
                                }
                                children={
                                    <div>
                                        <p> When a card is additionaly another card, it gains all properties of that card which would not replace its own.
                                            Examples of replacing properties are size and name. If a card already posesses those properties, like a power and toughness,
                                            they are unchanged when targeted with Relive. All other properties on a magic card are additive. Color, mana cost, text boxs, 
                                            types, super types, subtypes... </p>
                                        <p>A good rule of thumb is to think stickers or mutate. You can keep adding types, colors, and abilities.</p>
                                    </div>
                                }  />

                            <Collapse id='Wordy'
                                heading={
                                    <p>WORDY</p> 
                                }
                                children={
                                    <div>
                                        <p> Wordy is an existing mechanic in unmagic. While a wordy card is any card with 
                                            four or more lines of rules text, wordy cards have wordy lines of rules.
                                            Each line beyond the third is concidered wordy.
                                        </p>
                                        <p> A line can only be concidered wordy if it has any rules text. That means both reminder text and 
                                            flavor text dosen't count. 
                                            Sorry <a href="https://cards.scryfall.io/large/front/5/2/521d1b29-c25b-443b-ae5f-07c11786947e.jpg?1562547698" target="_blank">Time Stop</a> haters.
                                        </p>
                                    </div>
                                }  />

                            <Collapse id='Card Tokens'
                            heading={
                                <p>CARD TOKENS</p> 
                            }
                            children={
                                <div>
                                    <p> Tokens are not cards, sorry to burst your bubble. But, with the power of un-magic, they can be.
                                        Some cards in the set will either make card tokens, or make tokens also cards. This means that 
                                        the tokens continue to exist between zones. YAY!   </p>
                                    <p> A card token is still a token.</p>
                                </div>
                            }  />
                        </div>
                    }  />

                <Collapse id='CARDS'
                    heading={
                        <p>CARDS</p> 
                    }
                    children={
                        <div>
                            <p>If you have no clue how the hell a card should work, you'll probably find it here.</p>

                            <Collapse id='A Geist From Geistblast'
                                heading={
                                    <p>A Geist From Geistblast</p> 
                                }
                                children={
                                    <div>
                                        <p> The giest gains the effects of every instant and 
                                            sorcery on the stack. If it does, it is no longer a creature,
                                            and has the types of all instant / sorcery cards on the stack.
                                            The geist is a copy of every spell at once, you cannot pick and
                                            choose. It is put directly into the grave after it resolves, like
                                            a spell does. This does see a creature being put into the grave, 
                                            for cards 
                                            like <a href='https://cards.scryfall.io/large/front/9/2/9241a72e-cb88-4cea-a2f4-ff10af461437.jpg?1706240798' target="_blank">Syr Konrad, the Grim</a>,
                                            but the geist does not die.
                                        </p>
                                        <p> While you can choose new targets, you cannot choose new 
                                            modes for modal spells. Sowwy.
                                        </p>
                                    </div>
                                }  />

                            <Collapse id='All Out Aggressor'
                                heading={
                                    <p>All Out Aggressor</p> 
                                }
                                children={
                                    <div>
                                        <p> 
                                        While All Out Aggressor is in play, post combat main phases do not exist. This means
                                        that all postcombat main phases are skipped and cannot be entered.
                                        If you are currently in a postcombat main phase, GET THE HELL OUT! It becomes the 
                                        next phases as a state based action.
                                        </p>
                                        <p> 
                                        To attack on your opponents turn, All Out Aggressor must be untapped. Then after your opponent declares attackers,
                                        you declare this as an attacker. Then, after you declare blockers, your opponent declared blocker for the Aggressor.
                                        Finnaly, damage is all dealt at the same time. Remember this, there will be a test. 
                                        </p>
                                    </div>
                                }  />
                                <Collapse id='Angel Of Righteousness'
                                heading={
                                    <p>Angel Of Righteousness</p> 
                                }
                                children={
                                    <div>
                                        <p> 
                                            Humaniod is a contencious description. But my say is, all bipedal creatutures large enough to be concidered human are humanoid.
                                            I could kill a Faerie with a fly swatter, hardly humanoid. Machines constructs modrons, not humanoid. Most goblins are barely 2 feet tall, love 'em,
                                            but not humanoid. Unfortunately, by these metrics, toddlers also not humanoid. It's a flawless imperical system, onto the next rule.
                                        </p>
                                    </div>
                                }  />
                                <Collapse id='Bip, The Unboltable'
                                heading={
                                    <p>Bip, The Unboltable</p> 
                                }
                                children={
                                    <div>
                                        <p> 
                                            What is a bolt. I am hardly qualified to answer. You and your fellow mages will need to discuss this amongst yourselves.
                                        </p>
                                        <p> 
                                            In my incredibly unprofessional opinion, a bolt is any spell or ability which deals damage to one or more
                                            targets. <a href='https://cards.scryfall.io/large/front/3/6/364ed745-0dff-477a-a2c5-987639936337.jpg?1593095847' target="_blank">Forked Bolt</a> is a 
                                            bolt. <a href='https://cards.scryfall.io/large/front/1/a/1ab6ffe8-e1ad-4db9-98f7-d6038f271866.jpg?1675200043' target="_blank">Grim Lavamancer</a> is a 
                                            bolt. <a href='https://cards.scryfall.io/large/front/b/f/bf20ea7b-e480-4b0e-b080-888f24d3c08d.jpg?1592518125' target="_blank">Sorin</a> is a 
                                            bolt. Thank you for coming to my TED talk. 
                                        </p>
                                    </div>
                                }  />
                                <Collapse id='Impromptu Interlude'
                                heading={
                                    <p>Impromptu Interlude</p> 
                                }
                                children={
                                    <div>
                                        <p> 
                                            To take a phase right now, imagine as though every other spell on the stack is phased out. Then take that phase with priority.
                                            When you are done, return back the the regular game state as though no interplanar nonsense just happened.
                                        </p>
                                        <p> 
                                            It is still the same players turn, but it is your phase. So, effects like at the beginning of your upkeep would trigger. 
                                        </p>
                                    </div>
                                }  />
                                <Collapse id='In Your Hands'
                                heading={
                                    <p>In Your Hands</p> 
                                }
                                children={
                                    <div>
                                        <p> 
                                            I dont really know what sort of rules qualifications I can give for this card. It feels pretty self explanitory to me,
                                            but I know a lot of people had some issues. I think the thing to keep in mind is your hand and life total are equivalent. If you are to ever lose life, you discard that many cards.
                                            If you are ever to draw cards, you life total increaes by that amount. This also means, whenever you draw a card, you are also gaining a life. So life gain triggers trigger.
                                        </p>
                                        <p> 
                                            When In Your Hands enters, it is your life total which becomes the number of cards in your hand. This means your life total is the value which changes initially.
                                        </p>
                                        <p> 
                                            This card leaving play does not revert your life total or hand size. They just stop being linked.
                                        </p>
                                    </div>
                                }  />
                        </div>

                    } />

            </div>
        </div>
        </div>
    );
}

export default Rules
