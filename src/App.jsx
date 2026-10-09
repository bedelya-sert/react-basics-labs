import React, { useState } from 'react';
import Task from './components/Task';
import './App.css'

function App() {
    const [ taskState, setTaskState ] = useState({
     tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority_lvl:"High"},
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority_lvl:"Medium"},
      { id: 3, title: "Tidy up", deadline: "Today", priority_lvl:"Low"}
         ]
    });

  return (
    <div className="container">
      <h1>Tasky</h1>
       {taskState.tasks.map((task) => (              
        <Task 
           title={task.title}
           description={task.description}
           deadline={task.deadline}
           priority_lvl={task.priority_lvl}
           key={task.id}
         />
        ))} 
    </div>
  );
}
  
export default App
