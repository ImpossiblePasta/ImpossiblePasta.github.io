import React, { useState } from 'react';
import { Text, View } from 'react-native';
import './card_card.css';
import tabImg from '../assets/icons/newtab.png';
import loadingImg from '../assets/icons/loading.png';

function CardCard({title, link, image}){

  const [picture, setPicture] = useState(image);
  const [loading, setLoading] = useState("");

  async function reloadImg(link) {
    // Begin by loading
    load();
    // Then return
    await loadIMG(link);
    // Stop the loading animation
    stopLoad();
  }

  async function loadIMG(link) {
    return fetch(link, { cache: 'reload', mode: 'no-cors' })
    .then( setPicture(link + new Date().getTime()) )
  }

  function resetImg(){
    setPicture(image)
  }
  
  function load(){
    // Set loading to visible
    setLoading("loading");
  }

  function stopLoad(){
    // Set loading to invisible
    setLoading("");
  }

  return(
    <div class="card">
      <button class="nameButton"
          onClick={() => resetImg()} >
          {(title).toUpperCase()}
      </button>
      <div class="cardBox">
        <img src={picture} />
        <img class={"rotate ".concat(loading)}
        src={loadingImg} />
      </div>
      
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