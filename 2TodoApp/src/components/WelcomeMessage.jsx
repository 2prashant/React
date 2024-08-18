const WelcomeMessage=({todoItems})=>{
    return (<>
    {todoItems.length === 0 && <h1>Please enter todoName and todoDate</h1>}
    </>)

}
export default WelcomeMessage;