import './App.css';
import DateTime from './DateTime';
import TaskBoard from './TaskBoard';

function App() {

const MAX_TASKS_NUMBER = 10;


  return (
    <div className="App">
      <header className="App-header">
        <div>hello world</div>
        </header>
        <DateTime></DateTime>
        <TaskBoard></TaskBoard>
    </div>
  );
}

export default App;
