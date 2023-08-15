import React, { useState } from "react";
import Title from "./Components/Title";
import "./style.css";
function App() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...tasks, newTask]);
      setNewTask("");
    }
  };
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTask(newTasks);
  };
  return (
    <div>
      <Title />
      <div className="container-box">
        <div className="container-box-1">
          <div className="container">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a New Task"
            />
            <button className="Add-button" onClick={addTask}>
              Add
            </button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button
                  className="remove-btn"
                  onClick={() => removeTask(index)}>
                  Remove{" "}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
