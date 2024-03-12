import React, { useState } from 'react';
import './slideshow.css';
import arrow from '../assets/icons/expand.png';

function SlideShow({images}){

  const [index, setIndex] = useState(0);

  function next() { setIndex((index+1)%images.length); }
  function last() { setIndex((index -1+images.length)%images.length); }

  return(
    <div class="slideshow">
      {
        images.map((image, i) => { 
          return <img class='cardImg' 
          style={{
            opacity: index == i ? 1 : 0
          }}
          src={image}/>
        })
      }
      
      <button class="last"
        onClick={()=>last()}
      >
        <img src={arrow}/>
      </button>
      <button class="next"
        onClick={()=>next()}
      >
        <img src={arrow}/>
      </button>
    </div>
  )
}

export default SlideShow