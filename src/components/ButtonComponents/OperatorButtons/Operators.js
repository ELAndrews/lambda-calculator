import React from "react";
import "src/App.css";
import { operators } from '../../../data';


//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = React.useState(operators);
  return (
    <div>
      {operators.map((op, index) =>{
        return (
          <OperatorButton />
        )
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
