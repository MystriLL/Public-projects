import React from 'react';
import './App.css';
import DateTime from './DateTime';
import TaskBoard from './TaskBoard';

function App() {
let storedTasks = (localStorage.getItem("storedTasks")) ? JSON.parse((localStorage.getItem("storedTasks"))) : [];


  return (
    <div className="App">
      <header className="App-header">
        <div>hello world</div>
        </header>
        <DateTime></DateTime>
        <TaskBoard storedTasks = {storedTasks}></TaskBoard>
    </div>
  );
}

export default App;
