import React from 'react'
import Task from './Task';

export default function TaskBoard(props){
//const MAX_TASKS_NUMBER = 10;

// rendering tasks from local storage content given as props
let taskArray = props.storedTasks.map(task => {
    return <Task name = {task.name} key = {task.name}></Task>
});
const[Tasks, setTasks] = React.useState(taskArray);
const inputRef = React.createRef(); //reference that allows to get value from input



const handleSubmit = (e) =>{
    e.preventDefault();

    const newTask = {
        key: inputRef.current.value,
        name: inputRef.current.value,
        priority: 0,
    }
    props.storedTasks.push(newTask);
    localStorage.setItem("storedTasks", JSON.stringify(props.storedTasks));
    
    taskArray = props.storedTasks.map(task => {
        return <Task name = {task.name} key = {task.name}></Task>
    });
    setTasks(taskArray);
    e.target.reset();
}


return(
    <>
    <form class = "TaskAddForm" onSubmit = {handleSubmit}>
    <input class = "taskInput" placeholder = "Add task" ref = {inputRef}></input>
    </form>
    <section>
        {Tasks} 
    </section>
    </>
);}
