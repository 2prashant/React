import AppItem from "./AppItem"

const AppItems=({AppList})=>{
    return(<>
    {AppList.map((item)=>(
       <AppItem todoName={item.todoName} todoDate={item.todoDate}/>
    ))}
   
    </>)
}
export default AppItems;