import React, {useState} from 'react';
import {Text, Image, Button} from 'react-native';
import './effects.css';
import ArtHeader from '../../components/art_header';

function Effects(){

  const[cards] = useState([
    {
      title: "Quandrix Recall Codex",
      img_link: '../../assets/display_cards/Quandrix Recall Codex.png',
      card_link: [
        "https://api.scryfall.com/cards/random?q=t:creature+m%3D{4}{G}{G}+-is:digital&unique=cards&format=image"
      ],
    },

    {
      title: "Trifle Mage",
      img_link: '../../assets/display_cards/Trifle Mage.png',
      card_link: [
        "https://api.scryfall.com/cards/random?q=is:spell+t:artifact+c%3Dc+cmc%3C%3D1+f%3Dv&unique=cards&format=image"
      ],
    },

    {
      title: "Sheet Head",
      img_link: '../../assets/display_cards/Sheet Head.png',
      card_link: [
        "https://api.scryfall.com/cards/random?q=t:sticker&unique=cards&format=image"
      ],
    },
  ])

  document.title="About"
  return (
      <div>
          {ArtHeader("CARD EFFECTS")}
          <div class="container">
            {
              cards.map((card, i) => (
                <div className="card" key={i} >
                  <Text>{card.title}</Text>
                  <Button
                    onPress={() => window.open(card.card_link, "_blank", "noreferrer")}
                  ></Button>
                </div>
              ))
            }
          </div>
      </div>
  )
}

export default Effects