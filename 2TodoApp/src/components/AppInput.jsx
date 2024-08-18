import style from "./AppInput.module.css"
const AppInput=()=>{
    return (<div className={style.appInputContainer}>
  <div class="mb-3">
    <input type="text" placeholder="enter TodoApp Name"/>
  </div>
  <div class="mb-3"> 
    <input type="date" />
  </div>
  <button type="button" class="btn btn-info">ADD</button>
    </div>)
}
export default AppInput;