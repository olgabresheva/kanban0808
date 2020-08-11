import React, {useState} from 'react';
import './App.css';
import TaskCreateForm from "./TaskCreateForm";
import Board from "./Board";
import {v4 as uuidv4} from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"

const initial = [
    {id: uuidv4(), title: 'Task-1', priority: 2, status: 'To Do'},
    {id: uuidv4(), title: 'Task-2', priority: 3, status: 'Review'},
    {id: uuidv4(), title: 'Task-3', priority: 1, status: 'In Progress'},
]

function App() {

    const [tasks, setTasks] = useState(initial);
    const status = ['To Do', 'In Progress', 'Review', 'Done']

    const onTaskCreate = (newTask, priority) => {
        const updatedTasks = [...tasks];
        updatedTasks.push({id: uuidv4(), title: newTask, priority: priority, status: 'To Do'});
        setTasks(updatedTasks);
    }

    const onTaskDelete = (id) => {
        const updatedTasks = tasks.filter(el => el.id !== id)
        setTasks(updatedTasks);
    }

    const onTaskMove = (id, direction) => {
        const updatedTasks = tasks.map(el => {
            if (el.id === id) {
                if (direction === 'left') {
                    return ({...el, status: status[status.indexOf(el.status) - 1]})
                }
                if (direction === 'right') {
                    return ({...el, status: status[status.indexOf(el.status) + 1]})
                }
            } else return el;
        })
        setTasks(updatedTasks);
    }

    const onTaskMoveByPriority = (id, direction) => {
        const updatedTasks = tasks.map(el => {
            if (el.id === id) {
                if (direction === 'down') {
                    return ({...el, priority: el.priority + 1})
                }
                if (direction === 'up') {
                    return ({...el, priority: el.priority - 1})
                }
            } else return el;
        })
        setTasks(updatedTasks);
    }

    const onTaskSave = (id, newTitle) => {
        const updatesTasks = tasks.map(el => {
            if (el.id === id) {
                return ({...el, title: newTitle})
            } else return el;
        })
        setTasks(updatesTasks);
    }

    return (
        <div className="App">

            <div className="container">

                <h2>Kanban Board</h2>
                <TaskCreateForm onTaskCreate={onTaskCreate}/>

                <hr/>
                <div className="row">
                    {status.map((el, index) => <Board
                        key={index}
                        status={el}
                        tasks={tasks}
                        onTaskDelete={onTaskDelete}
                        onTaskMove={onTaskMove}
                        onTaskMoveByPriority={onTaskMoveByPriority}
                        onTaskSave={onTaskSave}/>)}
                </div>

            </div>
        </div>
    );
}

export default App;
