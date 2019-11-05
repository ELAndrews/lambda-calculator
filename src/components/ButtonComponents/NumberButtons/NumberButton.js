import React from "react";
import "../../../App.css";

export const NumberButton = (props) => {
  return (
      <button className="numberBtn"
      id={props.num === '0' ? 'longBtn':null}>
        {props.num}
      </button>
  );
};
