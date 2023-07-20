import Arrays from "./Arrays";
import Objects from "./Objects";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(prevCount => prevCount + 1);
  }

  const handleDecrement = () => {
    setCounter(prevCount => prevCount - 1);
  }

  const incrementFive = () => {
    setCounter(prevCount => prevCount + 5)
  }

  const decrementFive = () => {
    setCounter(prevCount => prevCount - 5)
  }

  const reset = () => {
    setCounter(prevCount => prevCount = 0);
  }

  return (
    <div className="App">
      <h1>React Drills</h1>
      
      {/* <Arrays /> */}
      {/* <Objects /> */}      
      <h1> {counter} </h1>
      <button onClick = {handleIncrement}> + </button>
      <button onClick = {handleDecrement}> - </button>
      <br />
      <button onClick = {reset}> RESET </button>
      <br />
      <button onClick={incrementFive}>Increment 5</button>
      <button onClick={decrementFive}>Decrement 5</button>
    </div>
  );
}

export default App;
