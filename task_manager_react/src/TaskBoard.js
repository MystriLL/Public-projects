import React from 'react'
import Task from './Task';



export default function TaskBoard(){
//console.log("TaskBoard rendered");
let taskArray = JSON.parse((localStorage.getItem("storedArray"))) ? JSON.parse((localStorage.getItem("storedArray"))) : [];

const inputRef = React.createRef(); 
const[AllTasks, setAllTasks] = React.useState();

const handleSubmit = (e) =>{
    e.preventDefault();
    const newTask = {
        key: inputRef.current.value,
        name: inputRef.current.value,
        priority: 0,
    }

    taskArray.push(newTask);
    localStorage.setItem("storedArray", JSON.stringify(taskArray)); 
    e.target.reset();
    console.log(taskArray)
    taskArray = taskArray.map(task => {
        return <Task name = {task.name} key = {task.name}></Task>
    });
    setAllTasks(taskArray);
    
}



return(
    <>
    <form class = "TaskAddForm" onSubmit = {handleSubmit}>
    <input class = "taskInput" placeholder = "Add task" ref = {inputRef}></input>
    </form>
    <section>
        {AllTasks}
    </section>
    </>
);

}