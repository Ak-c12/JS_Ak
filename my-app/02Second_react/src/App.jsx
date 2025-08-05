import './index.css';
import {  useState } from 'react';

function App() { 

  let [counter, setCounter] = useState('3'); // This line is not necessary for the current functionality but included to show useState import
  // let counter = 3; // This line is not necessary for the current functionality but included to show useState import
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  // console.log('Counter value:', counter);
  };
   
  const removeValue = () => {
    // counter = counter - 1; 
    setCounter(counter-1);
  };

  return (
    <>
     <h1>My App</h1>
     <h3>Counter value: {counter}</h3>

     <button onClick={addValue}>Add value:{counter}</button>
     <br />
     <button onClick={removeValue} >Remove value: {counter}</button>
     
     
    </>
  )
}

export default App;