import TaskForm from "./components/TaskForm"

function App() {

  return (
    <>
    <main>
      <h1> random-notes</h1>
       < TaskForm onAddTask={(task) => console.log(task)} />

    </main>
    </>
  )
}

export default App
