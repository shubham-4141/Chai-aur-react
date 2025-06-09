import { useState , useCallback , useEffect, useRef} from 'react'


function App() {
  const[length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass =""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str += "!@#$%^&*()"
      
    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
      
    }

    setPassword(pass)
  
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordTOClipbboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            
            type="text"
            value={password}
            className="bg-white text-black px-2 py-1 rounded w-full"
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordTOClipbboard} 
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-1 rounded transition duration-150">Copy</button>
        </div>
        <div
        className='flex text-sm gap-x-2'>
          <div  className='flex items-center gap-x-1' >
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}

            />
            <label>Length:{length}</label>
          </div>
           <div  className='flex items-center gap-x-1' >
            <input type="checkbox"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={()=>{setNumberAllowed((prev)=>!prev);}}

            />
            <label>Number</label>
          </div>
          <div  className='flex items-center gap-x-1' >
            <input type="checkbox"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={()=>{setCharAllowed((prev)=>!prev);}}

            />
            <label>Character</label>
          </div>
         </div>
        </div>
        
    </>
  )
} 

export default App
