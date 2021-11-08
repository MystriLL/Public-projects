function Task(props){
    console.log(`TASK o nazwie ${props.name} STWORZONY`)
    return(
        <div>{props.name}</div>
    )
}
export default Task;