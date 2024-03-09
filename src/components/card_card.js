import React, { useState } from 'react';
import { Text, View } from 'react-native';
import './card_card.css';
import tabImg from '../assets/icons/newtab.png';

function CardCard({title, link, image}){

  const [picture, setPicture] = useState(image);

  async function reloadImg(link) {
    return fetch(link, { cache: 'reload', mode: 'no-cors' })
    .then( setPicture(link + new Date().getTime()) )
  }
  

  return(
    <div class="card">
      <p>{(title).toUpperCase()}</p>
      <img src={picture}
      />
      {
        link.map((link, i) => (
        <div class="ButtLayout">
          <button
            onClick={() => reloadImg(link)}
          >{link[1]}</button>
          <button
            onClick={() => window.open(link, '_blank')}
            class="link"
          >
            <img src={tabImg}/>
          </button>
        </div>
        ))
      }
    </div>
  )
}

export default CardCard