import React from 'react';
import './App.css';
import Task from "./Task";

function Board(props) {
    return (
        <span className="col-sm">
            {props.status}
            {props.tasks.filter(el => el.status === props.status).map(el => <li key={el.id}>
                <Task task={el}/>
            </li>)}
        </span>
    );
}

export default Board;
