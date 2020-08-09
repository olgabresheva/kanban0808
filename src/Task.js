import React from 'react';
import './App.css';

function Task(props) {
    return (
        <span className="Task">
            {props.task.title}
            P:{props.task.priority}

        </span>
    );
}

export default Task;
