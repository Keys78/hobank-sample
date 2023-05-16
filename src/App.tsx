import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomQuestionGenerator from './components/Randomize'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className='bg-green-500 h-[100vh] flex items-center justify-between'>
      <RandomQuestionGenerator />
    </div>
  )
}

export default App
