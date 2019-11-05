import React from "react";

export const OperatorButton = (props) => {
  return (
   <button className="operatorBtn">
     {props.op.char}
   </button>
  );
};
