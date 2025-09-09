import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

interface Task {
  _id: string;
  taskname: string;
} 
function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data.data)); 
  }, []);

  const handleAddTask = async (taskname: string) => {
    const res = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskname }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask.data]);
  };

  const handleEdit = async (id: string, newTaskname: string) => {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskname: newTaskname }),
    });
    const updated = await res.json();
    setTasks(tasks.map(t => (t._id === id ? updated.data : t)));
  };

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter(t => t._id !== id));
  };


  return (
    <>
    <main>
      <h1> random-notes</h1>
       < TaskForm onAddTask={handleAddTask}/>
       < TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
      <footer>© 2025 random-notes created by martapla</footer>
    </main>
    </>
  )
}

export default App
