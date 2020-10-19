import React from 'react';
import AddTask from './AddTask.js';
import '../App.css';

function TaskComponent(){
  const d = new Date();
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const day = d.toLocaleDateString(undefined, options);

  return (
  <div className="container">
    <div className="title">
      <h1 className="textTitle">{day}</h1>
      <AddTask />
    </div>
  </div>
  );
}

export default TaskComponent;