import React, {useState, useRef, useEffect} from 'react';
import { Text, View } from 'react-native';
import './textbox.css';
import exandImg from '../assets/icons/expand.png';


export const Collapse = ({ heading, children }) => {
  // Hold the boolean isExpanded
  const [isExpanded, setIsExpanded] = useState(!new Boolean());
  // Hold the toggle function
  function ToggleBox(){
    // Update the current height
    setContentHeight(ref.current.clientHeight + 5);
    // Simply toggle isExpanded
    setIsExpanded(!isExpanded);
  }

  // Cool height shit
  const ref = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.clientHeight);
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