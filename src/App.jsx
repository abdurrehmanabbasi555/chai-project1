import { useState } from "react";
import './Custom.css';
 
function App() {

  const [counter, setCounter] = useState(0);
  // let counter = 0;

  const addValue = () => {
    setCounter(counter + 1);
    if (counter === 20 ) {
      setCounter(counter);
    }
    //  document.getElementById('display').textContent = `React Counter: ${ counter }`;
  };

  const removeValue = () => {
    setCounter(counter - 1);
    if (counter <= 0 ) {
      setCounter(counter);      
    }
    //  document.getElementById('display').textContent = `React Counter: ${ counter }`;
  };

  const resetValue = () => {
    setCounter(counter === 0);
  };

  return (
    <>
      <div className="counter-container">
      <h1 id="display"> {counter}</h1>
      <div className="buttons">
        <button className="btn add-btn" onClick={addValue}>Add Value</button>
        <button className="btn remove-btn" onClick={removeValue}>Remove Value</button>
        <button className="btn remove-btn" onClick={resetValue}>Reset</button>

      </div>
    </div>
    </>
  )
}

export default App
