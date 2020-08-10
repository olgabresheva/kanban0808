import React from 'react';
import './App.css';
import Task from "./Task";


function Board(props) {
    return (
        <span className="col-sm">
             <div className="card-header">
            {props.status}
             </div>
            <p/>
            {props.tasks.filter(el => el.status === props.status).map(el =>
                <li key={el.id}>
                    <Task task={el}
                          onTaskDelete={props.onTaskDelete}
                          onTaskMove={props.onTaskMove}
                          onTaskMoveByPriority={props.onTaskMoveByPriority}/>
                </li>).sort()}
        </span>
    );
}

export default Board;
