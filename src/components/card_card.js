import React, { useState } from 'react';
import { Text, View } from 'react-native';
import './card_card.css';
import tabImg from '../assets/icons/newtab.png';

function CardCard({title, link, image, button_name}){

  const [picture, setPicture] = useState(image);

  async function reloadImg() {
    return fetch(link, { cache: 'reload', mode: 'no-cors' })
    .then(response => 
      setPicture(link + new Date().getTime()))
  }
  

  return(
    <div class="card">
      <img src={picture}
      />
      <div class="ButtLayout">
        <a
          onClick={() => reloadImg()}
        >{button_name}</a>
        <a
          href={link} target="_blank"
          class="link"
        >
          <img src={tabImg}/>
        </a>
      </div>
    </div>
  )
}

export default CardCard