import style from "./AppItem.module.css"
const AppItem=({todoName,todoDate,onDeleteClick})=>{
    return (<>
      <div className={style.AppItemContainer}>
       <p>{todoName}</p>
       <p>{todoDate}</p>
       <button type="button" class="btn btn-danger" onClick={()=>onDeleteClick(todoName)}>Danger</button>
       </div>
    </>)
}
export default AppItem;