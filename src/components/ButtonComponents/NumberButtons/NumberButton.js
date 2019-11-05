import React from "react";
import "../../../App.css";

export function NumberButton(props) {
 
  return (
      <button className="numberBtn"
      id={props.num === '0' ? 'longBtn':null} 
      onClick ={() => props.setDisplayState(props.displayState + props.num)}
      >
        {props.num}
      </button>
  );
};
