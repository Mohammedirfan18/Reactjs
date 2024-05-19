import { useState } from 'react'
import './App.css'

function App() {
  
  let [Counter,setCounter]=useState(10);
// let Counter =10;
const IncreaseCount=()=>
{
  if(Counter < 20)
  {
    Counter++;
    setCounter(Counter);
  }
    console.log(Counter);
}
const DecreaseCount=()=>
{
  if(Counter > 0)
    {
      Counter--;
      setCounter(Counter);
    }
  console.log(Counter);
}
  return (
    <>
      <h1>Chai aur hooks</h1>
      <h2>Counter value:{Counter}</h2>
      <button onClick={IncreaseCount}>Increase Count</button>
      <button onClick={DecreaseCount}>Decrease Count</button>
    </>
  )
}

export default App
