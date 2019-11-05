import React from "react";


export const SpecialButton = (prop) => {
  return (
    <button onClick ={() => {
      if(prop.char === 'C'){
        prop.setDisplayState(null)}}}>
      {prop.char}
    </button>
  );
};


