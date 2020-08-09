import React, {useState} from 'react';
import './App.css';

function TaskCreateForm(props) {

    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState(0);

    const taskCreate = () => {
        props.onTaskCreate(newTask, priority);
        setNewTask('');
    }

    return (
        <div className="TaskCreateForm">

            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)}/>
            <input type="number" value={priority} onChange={e => setPriority(e.target.value)}/>
            <button onClick={taskCreate}>Add Task</button>


        </div>
    );
}

export default TaskCreateForm;
