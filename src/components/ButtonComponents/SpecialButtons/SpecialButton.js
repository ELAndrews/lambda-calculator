import React from "react";


export const SpecialButton = (props) => {
  return (
    <button 
    onClick ={() => props.char === "C" ? props.setDisplayState(0) : null} >
      {props.char}
    </button>
  );
};


