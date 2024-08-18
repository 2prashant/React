import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppInput from './components/AppInput'
import AppName from './components/AppName'
import AppItem from './components/AppItem'
import AppItems from './components/AppItems'

function App() {
  const [count, setCount] = useState(0)

  const AppList=[{
    todoName:"milk",
    todoDate:"10/10/2023"
  },{
    todoName:"apple",
    todoDate:"12/09/2022"
  }]

  return (
    <center>
    <div className="AppContainer">
      <AppName/>
      <div>
        <AppInput/>
      </div>
      <AppItems AppList={AppList}  />
    </div>
    </center>
  )
}

export default App
