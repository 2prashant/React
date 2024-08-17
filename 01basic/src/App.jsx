import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue=()=>{
    counter=counter+1;
    setCounter(counter);
  }
  const deleteValue=()=>{
    counter=counter-1;
    setCounter(counter);
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value :{counter}</h2>
     <button onClick={addValue}>Add</button>
     <button onClick={deleteValue}>remove</button>
    </>
  )
}

export default App
