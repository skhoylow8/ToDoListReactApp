import React from 'react';
import IndividualTask from './IndividualTask';

function TaskList(props){
    return(
        <div className="task">
            {props.tasks.map(task => 
                <IndividualTask key={task.task} id={task.color} value={task} deleteItem={props.deleteItem}/>
            )}
        </div>
    );
}

export default TaskList;