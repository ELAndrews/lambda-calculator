import React from "react";

export const Display = (props) => {
  // const [displayState, setDisplayState] = React.useState(0);

  return <div className="display">{ props.displayState }</div>;
};

export default Display