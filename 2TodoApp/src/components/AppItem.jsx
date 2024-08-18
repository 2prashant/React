import style from "./AppItem.module.css"
const AppItem=({todoName,todoDate})=>{
    return (<>
      <div className={style.AppItemContainer}>
       <p>{todoName}</p>
       <p>{todoDate}</p>
       <button type="button" class="btn btn-danger">Danger</button>
       </div>
    </>)
}
export default AppItem;