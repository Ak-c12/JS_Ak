// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavSection from './navSection.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div className="App">
    <NavSection />
    <h1 className='text-[#888888] font-bold underline text-[40px] p-4 flex justify-center'>Hello world!</h1>

    <h2 className='text-red-500 text-[30px] font-bold flex justify-center'>This is a Tailwind CSS example in React</h2>

    


    </div>
  )
}

export default App
