import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"hitesh",
    age:21
  }

  const newArr=[1,2,3,4]

  return (
    <>
      <Heading/>
      <Card userName="chaiaurcode" btn="clickme"/>
      <Card userName="Hitesh" btn="visit me"/>
    </>
  )
}

export default App
