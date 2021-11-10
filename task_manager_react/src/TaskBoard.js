import React from 'react'
import Task from './Task';

export default function TaskBoard(props){
const MAX_TASKS_NUMBER = 10;

// rendering tasks from local storage content given as props
let taskArray = props.storedTasks.map(task => {
    return <Task name = {task.name} key = {task.name}></Task>
});
const[Tasks, setTasks] = React.useState(taskArray);
const inputRef = React.createRef(); //reference that allows to get value from input



const handleSubmit = (e) =>{
    e.preventDefault();
    const inputVal = inputRef.current.value;

    if(inputVal.split('').filter(c => c === "" ||  c === " ").length === inputVal.length){
        errorHandler("empty");
        e.target.reset();
        return;
        }
    if(props.storedTasks.length > MAX_TASKS_NUMBER){
        errorHandler("limitReached");
        e.target.reset();
        return;
        }
    if(props.storedTasks.filter(task => task.name === inputVal).length !== 0){
        errorHandler("repeated");
        e.target.reset();
        return;
    }   
    
    const newTask = {
        key: inputVal,
        name: inputVal,
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


const errorHandler = (errorType) =>{
    switch(errorType){
        case "limitReached":
            alert("Maximum tasks number exceeded. Please complete some first:)"); break;
        case "empty":
            alert("Empty task? No no no..."); break;
        case "repeated":
            alert("Such task already exist! Cannot add before you complete it"); break;
        default: 
    }
}