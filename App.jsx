import Display from './Display';
import Contain from './Contain';
import { useState } from 'react';
import './App.css';



export default function App(){
let [calVal, setcalVal] = useState("");
const onButtonClicked = (items) => {
  if(items == "C"){
    setcalVal("");
  } else if(items == "="){
    const result = eval(calVal);
    setcalVal(result);
  } else {
    const new_display = calVal + items;
    setcalVal(new_display);
  }
  
 
}

  return (
    <>
    <div id="calculator">
         <Display displayValue={calVal}></Display>
         
      <div id="button-container">
        <Contain onButtonClicked={onButtonClicked}></Contain>
        
      </div>
    </div>
    </>
  )
}                   