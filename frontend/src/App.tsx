import { useState } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {

  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]); // afegim la nova tasca
    console.log("New note: ", task);
  };

  const handleDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
    <main>
      <h1> random-notes</h1>
       < TaskForm onAddTask={handleAddTask}/>
      < TaskList tasks={tasks} onDelete={handleDelete} />


    </main>
    </>
  )
}

export default App
