import React from "react";
import "../../../App.css";

export const NumberButton = (props) => {
  return (
      <button className="numberBtn">
        {props.num}
      </button>
  );
};
