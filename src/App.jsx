import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


  let addvalue = () => {
    if(counter < 25){
      setCounter(counter + 1)
      console.log("clicked" , counter)
    }
    

  }

  let subtractvalue = () => {
    if(counter > 0){
      setCounter(counter - 1)
      console.log("clicked" , counter)
    }
    

  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter} </h2>

      <button onClick={addvalue}>Add Value</button>
      <br /> 
      <button onClick={subtractvalue}>Subtract Value</button>
    </>
  )
}

export default App
