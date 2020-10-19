import React from 'react';
import '../App.css';

function IndividualTask(props){

    function formatDueDate(d){
        if(d){
            const arr = d.split('-');
            return(arr[1] + "-" + arr[2] + "-" + arr[0]);
        } 
    }

    function handleChecked(e){
        props.deleteItem(props.value.task)
    }
    

    return(
        <div className="taskInfo" id={props.id}>
            <input type="checkbox" className="form-check-input" onClick={handleChecked}></input>
            <div className="individualTask">{props.value.task}</div>
            <div className="individualDate">Due: {formatDueDate(props.value.dueDate)}</div>
        </div>
    );
}

export default IndividualTask;