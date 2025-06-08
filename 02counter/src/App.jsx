import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

 // const [counter,setCounter] = useState(5) ese change krne ke liye let lena hoga
  let [counter,setCounter] = useState(5)
   
  //let counter = 5

  const addValue = () =>{
    // console.log("clicked",counter);
    
    //counter = counter + 1
    if(counter < 20)
      setCounter(counter + 1)
  }
  const removeValue = () =>{ 
    // console.log("clicked",counter);
    
    // counter = counter - 1
    if(counter > 0)
      setCounter(counter - 1)
  }

  return (
    <>

    <h1>Chai aur react </h1>
    <h2>Counter value: {counter} </h2>

    <button
    onClick={addValue}>Add value</button>
    <br />
    <button
    onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
