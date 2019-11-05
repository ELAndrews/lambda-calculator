import React from "react";
import "../../../App.css";

export function NumberButton(props) {
 
  return (
      <button className="numberBtn"
      onClick={() => 
        //  props.setDisplayState(props.num)
        console.log(props.num)}
      id={props.num === '0' ? 'longBtn':null} 
      >
        {props.num}
      </button>
  );
};
