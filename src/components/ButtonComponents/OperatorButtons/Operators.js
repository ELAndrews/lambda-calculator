import React from "react";
import "../../../App.css";
import { operators } from '../../../data';
import { OperatorButton } from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = React.useState(operators);
  return (
    <div className="operatorContainer">
      {operators.map((op, index) =>{
        return (
          <OperatorButton 
          op={op}
          key={index}
          operatorState={operatorState}
          setOperatorState={setOperatorState}/>
        )
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;