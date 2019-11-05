import React from "react";
import "src/App.css";
import { specials } from '../../../data';
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = React.useState(specials);
  return (
    <div>
      {specials.map((char, index) =>{
        return (
          <SpecialButton />
        )
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
