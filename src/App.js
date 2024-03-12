import React, { useState } from 'react';
import './App.css';
import ArtHeader from "./components/art_header.js"
import SlideShow from "./components/slideshow.js"

function App() {

  // Hold the image links being displayed
  const images = [
    require('./assets/display_cards/betterlotus.png'),
    require('./assets/display_cards/Acorn Acrobat.png'),
    require('./assets/display_cards/An All Too Friendly Reminder.png'),
    require('./assets/display_cards/Oversimplify.png'),
    require('./assets/display_cards/Add Odd Odds.png'),
    require('./assets/display_cards/Quandrix Recall Codex.png'),
    require('./assets/display_cards/Freight of Saint Chaff.png'),
    require('./assets/display_cards/Impromptu Interlude.png'),
    require('./assets/display_cards/In Your Hands.png'),
    require('./assets/display_cards/Rampage Roller.png'),
  ]

  return (
    <div>
      {ArtHeader("UNAMUSED")}
      <div class='homeBound'>
        <div class='slideshowBox'>
        <SlideShow images={images} />
        </div>
        <div class='homeTextBox'>
          <h1>What is UnAmused?</h1>
          <p>UnAmused! The spell slinging, high rolling, silver border set unlike anything you've ever played. After years of tinkering, playtesting, getting burnt out, and tinkering again; the set is ready for play. Each day new cards will be revealed culminating in its release on April 1st. Be there, be square.</p>
          <p>Check out the gallery to see some cards. I worked real damn hard on this.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
