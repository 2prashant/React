import { useState } from "react"
import style from "./AppInput.module.css"
const AppInput=({onNewItem})=>{

    const [inputAppName,setInputAppName]=useState()
    const [inputAppDate,setinputAppDate]=useState()


     const handleAppName=(event)=>{
        setInputAppName(event.target.value);
     }

     const handleAppDate=(event)=>{
        setinputAppDate(event.target.value);
     }

     const handleAddButton=()=>{
        onNewItem(inputAppName,inputAppDate);
        setInputAppName("");
        setinputAppDate("");

     }






    return (<div className={style.appInputContainer}>
  <div class="mb-3">
    <input type="text" placeholder="enter TodoApp Name" value={inputAppName} onChange={handleAppName}/>
  </div>
  <div class="mb-3"> 
    <input type="date" value={inputAppDate} onChange={handleAppDate}/>
  </div>
  <button type="button" class="btn btn-info"  onClick={handleAddButton}>ADD</button>
    </div>)
}
export default AppInput;