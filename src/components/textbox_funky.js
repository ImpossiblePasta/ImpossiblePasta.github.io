import React, {useState, useRef, useEffect} from 'react';
import { Text, View } from 'react-native';
import './textbox.css';
import exandImg from '../assets/icons/expand.png';


export const Collapse = ({ heading, children }) => {
  // Hold the boolean isExpanded
  const [isExpanded, setIsExpanded] = useState(!new Boolean());
  // Hold the toggle function
  function ToggleBox(){
    // Update the size of the obj
    Update();
    // Simply toggle isExpanded
    setIsExpanded(!isExpanded);
  }

  // The Generic Update function
  function Update(){
    // Update the current height
    setContentHeight(ref.current.clientHeight + 5);
    // Then update the parents if any
  }

  // Cool height shit
  const ref = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      Update();
    }
  }, [children]);

  // The body
  return (
    <div class="box">
      <button
        onClick={() => ToggleBox()}
      >
        {heading}
        <img 
          src={exandImg} 
          class={isExpanded ? "expanded" : ''}
        />
      </button>
      <div
        class='body'
        style={{
          height: isExpanded ? contentHeight : 0
        }}
      >
        <div ref={ref}>
          {children}
        </div>
      </div>
    </div>
    
  );
};

export default Collapse