import React, {useState} from 'react';
import './App.css';
import TaskCreateForm from "./TaskCreateForm";
import Board from "./Board";
import {v4 as uuidv4} from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"

const initial = [
    {id: uuidv4(), title: 'Task-1', priority: 2, status: 'todo'},
    {id: uuidv4(), title: 'Task-2', priority: 3, status: 'review'},
]

function App() {

    const [tasks, setTasks] = useState(initial);
    const status = ['todo', 'in progress', 'review', 'done']

    const onTaskCreate = (newTask, priority) => {
        const updatedTasks = [...tasks];
        updatedTasks.push({id: uuidv4(), title: newTask, priority: priority, status: 'todo'});
        setTasks(updatedTasks);
    }

    return (
        <div className="App">

            <div className="container">
                <TaskCreateForm onTaskCreate={onTaskCreate}/>

                <hr/>
                <div className="row">
                        {status.map(el => <Board status={el} tasks={tasks}/>)}
                </div>

            </div>
        </div>
    );
}

export default App;
