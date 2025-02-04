import React from "react";
import "../../../App.css";
import { numbers } from '../../../data';
import { NumberButton } from './NumberButton'
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
 
  // STEP 2 - add the imported data to state
  // const [numberState, setNumberState] = React.useState(numbers);
  return (
    <div className="numberContainer">
      {numbers.map((num, index) =>{
        return (
          <NumberButton 
          num={num}
          key={index}
          numberState={props.numberState}
          setNumberState={props.setNumberState}
          displayState={props.displayState}
          setDisplayState={props.setDisplayState}
          />
        )
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  )
}

export default Numbers;