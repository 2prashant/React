import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppInput from './components/AppInput'
import AppName from './components/AppName'
import AppItem from './components/AppItem'
import AppItems from './components/AppItems'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  const [AppList, setAppList] = useState([])

  const handleOnNewItem=(itemName,itemDate)=>{
    //  let NewTOdoItem=[...AppList,{todoName:itemName,todoDate:itemDate}]
    //  setAppList(NewTOdoItem);
    
    setAppList((currValue)=>{
      const NewTodoItem=[...currValue,{todoName:itemName,todoDate:itemDate}]
      return NewTodoItem;
    })
    
  }

  const handleDeleteClick=(todoitems)=>{
    //console.log(todoitems+"deleted");
    const newTodoItems=AppList.filter((item)=>item.todoName!==todoitems);
    setAppList(newTodoItems);

    

  }

  // const AppList=[{
  //   todoName:"milk",
  //   todoDate:"10/10/2023"
  // },{
  //   todoName:"apple",
  //   todoDate:"12/09/2022"
  // }]

  return (
    <center>
    <div className="AppContainer">
      <AppName/>
      <div>
        <AppInput onNewItem={handleOnNewItem}/>
      </div>
      <WelcomeMessage todoItems={AppList}/>
      <AppItems AppList={AppList}  onDeleteClick={handleDeleteClick} />
    </div>
    </center>
  )
}

export default App
