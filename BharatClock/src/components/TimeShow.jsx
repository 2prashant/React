import { useState } from "react";
const TimeShow=()=>{
   // const [time,setTime]=useState(new Date());
   const time = new Date();
    return (<>
    <p>This is the current time:{time.toLocaleString()}</p>
    </>)
}
export default TimeShow;