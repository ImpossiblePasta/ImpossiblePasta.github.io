import React, {useState} from 'react';
import {Text, Image, Button} from 'react-native';
import './play.css';
import ArtHeader from '../../components/art_header';
import CardCard from '../../components/card_card';



function Effects(){

  const[cards] = useState([
    {
      title: "Quandrix Recall Codex",
      img_link: require('../../assets/display_cards/Quandrix Recall Codex.png'),
      card_link: [
        ["https://api.scryfall.com/cards/random?q=t:creature+m%3D{4}{G}{G}+-is:digital&unique=cards&format=image#",
         "GENERATE DREADMAW"]
      ],
    },

    {
      title: "Trifle Mage",
      img_link: require('../../assets/display_cards/Trifle Mage.png'),
      card_link: [
        ["https://api.scryfall.com/cards/random?q=is:spell+t:artifact+c%3Dc+cmc%3C%3D1+f%3Dv&unique=cards&format=image#",
        "GENERATE BAUBLE"]
      ],
      link_name: ""
    },

    {
      title: "Sheet Head",
      img_link: require('../../assets/display_cards/Sheet Head.png'),
      card_link: [
        ["https://api.scryfall.com/cards/random?q=t:sticker&unique=cards&format=image#",
        "GENERATE STICKERS"]
      ],
    },

    {
      title: "Blade of This or That",
      img_link: require('../../assets/display_cards/Blade of This or That.png'),
      card_link: [
        ["https://api.scryfall.com/cards/random?q=otag:cycle-sword-ally-color+or+otag:cycle-sword-enemy-color&unique=cards&format=image#",
        "GENERATE SWORD"]
      ],
    },

    {
      title: "Omenpath Awakener",
      img_link: require('../../assets/display_cards/Omenpath Awakener.png'),
      card_link: [
        ["https://api.scryfall.com/cards/random?q=is:planar&unique=cards&format=image#",
        "GENERATE PLANE"]
      ],
    },

    {
      title: "Curm Trashmaster Mage",
      img_link: require('../../assets/display_cards/Curm Trashmaster Mage.png'),
      card_link: [
        ["https://api.scryfall.com/cards/random?q=is:spell+t:equipment+c:c+r:c+-is:digital&&unique=cards&format=image#",
        "GENERATE COMMON"],
        ["https://api.scryfall.com/cards/random?q=is:spell+t:equipment+c:c+r:u+-is:digital&&unique=cards&format=image#",
        "GENERATE UNCOMMON"],
        ["https://api.scryfall.com/cards/random?q=is:spell+t:equipment+c:c+r:r+-is:digital&&unique=cards&format=image#",
        "GENERATE RARE"],
        ["https://api.scryfall.com/cards/random?q=is:spell+t:equipment+c:c+r:m+-is:digital&&unique=cards&format=image#",
        "GENERATE MYTHIC"],
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
                <CardCard
                  title={card.title}
                  image={card.img_link}
                  link={card.card_link}
                />
              ))
            }
          </div>
      </div>
  )
}

export default Effects