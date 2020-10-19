import React, {useState} from 'react';
import '../App.css';
import TaskList from './TaskList.js';

function AddTask(props){
    const [taskList, setTaskList] = useState([]);
    const [tasks, setTasks] = useState('');
    const [dueDates, setDueDates] = useState('');
    
    function deleteItem(task){
        const filteredTaskList = taskList.filter(item =>item.task!==task);
        setTaskList(filteredTaskList);
    }

    function handleTaskChange(e){
      setTasks(e.target.value);
    }

    function handleDateChange(e){
      setDueDates(e.target.value);
    }

    function handleSubmit(e){
        const taskListCopy = taskList.slice()
        setTaskList(taskListCopy.concat({task: tasks, dueDate: dueDates, color:e.target.colors.value}));
        e.preventDefault(); 
    } 


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row taskForm">
                    <div className="taskFormElements">
                        <label htmlFor="colors">Choose a color:</label>
                        <select name="colors" id="colors" >
                            <option value="red">Red</option>
                            <option value="pink">Pink</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="purple">Purple</option>
                            <option value="orange">Orange</option>
                            <option value="gray">Gray</option>
                        </select>
                    </div>
                    <div className="taskFormElements">
                        <label>Task:</label>
                        <input type="text" onChange={handleTaskChange}></input>
                    </div>
                    <div className="taskFormElements">
                        <label>Due Date:</label>
                        <input type="date" onChange={handleDateChange}></input>
                    </div>
                    <div className="taskFormElements">
                        <button type="submit" className="btn btn-dark">Add</button>
                    </div>
                </div>
            </form>
            <div>
                <TaskList deleteItem={deleteItem} tasks={taskList}/>
            </div>
        </div>
    );

}

export default AddTask;