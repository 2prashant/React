import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockMoto from './components/ClockMoto'
import ClockName from './components/ClockName'
import TimeShow from './components/TimeShow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClockName/>
      <ClockMoto/>
      <TimeShow/>
    </>
  )
}

export default App
