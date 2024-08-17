import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center className='todocontainer'>
      <div>
      <Heading/>
      <AddTodo/>
      <TodoItem/>
      </div>
    </center>
  )
}

export default App
