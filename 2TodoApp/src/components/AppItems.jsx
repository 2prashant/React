import AppItem from "./AppItem"

const AppItems=({AppList,onDeleteClick})=>{
    return(<>
    {AppList.map((item)=>(
       <AppItem todoName={item.todoName} todoDate={item.todoDate} onDeleteClick={onDeleteClick}/>
    ))}
   
    </>)
}
export default AppItems;