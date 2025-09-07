import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count+1);
  const decrease = () => setCount(count-1);
  const setZero = () => setCount(0);


  return (
    <>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setZero}>Set to Zero</button>
      <h1>{count}</h1>
    </>
  )
}

export default App