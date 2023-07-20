import Arrays from "./Arrays";
import Objects from "./Objects";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1>React Drills</h1>
      
      {/* <Arrays /> */}
      {/* <Objects /> */}
      
      <h1> {counter} </h1>
      <button onClick = {handleIncrement}> + </button>
      <button onClick = {() => {setCounter(counter - 1)}}> - </button>
      <br />
      <button onClick = {() => {setCounter(0)}}> RESET </button>
    
    </div>
  );
}

export default App;
