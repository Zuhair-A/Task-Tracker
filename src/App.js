import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() === "") return;

    let newId;
    if (tasks.length === 0) {
      newId = 1;
    } else {
      newId = tasks[tasks.length - 1].id + 1;
    }
    const newTask = {
      id: newId,
      text: task,
      completed: false,
      completedDate: "",
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };
  const toggleTask = (clickedItem) => {
    const updatedTasks = tasks.map((item) =>
      item.id === clickedItem.id
        ? {
            ...item,
            completed: !item.completed,
            completedDate: !item.completed ? new Date().toLocaleString() : "",
          }
        : item
    );
    setTasks(updatedTasks);
  };
  const deleteTask = (clickedItem) => {
    const updatedTasks = tasks.filter((item) => item.id !== clickedItem.id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container App">
      <h1 style={{ marginBottom: 40 }}> Task Tracker</h1>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
