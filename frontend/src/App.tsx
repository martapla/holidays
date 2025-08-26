import TaskForm from "./components/TaskForm"

function App() {

  return (
    <>
      <h1> Holidays List</h1>
       < TaskForm onAddTask={(task) => console.log(task)} />
    </>
  )
}

export default App
