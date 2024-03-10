import React from 'react';
import { Text, View } from 'react-native';
import './textbox.css';
import tabImg from '../assets/icons/newtab.png';

function Textbox({heading, body}){


  return(
    <div class="box">
      <p>{heading}</p>
      <p>{body}</p>
    </div>
  )
}

export default Textbox