import { useState } from 'react'
import './App.css'

import Card from '../components/cards'

function App() {
  const [count, setCount] = useState(0)

let newArr =[1,3,2,2]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind css</h1>
      <Card title="Hotest Sunset" /*someObject={newArr}*//>
      <Card title="Its Coldest Sunset"btntext="Visit me"/>
      
    </>
  )
}

export default App
