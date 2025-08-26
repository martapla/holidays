export async function fetchTasks() {
  const response = await fetch('http://localhost:3000/tasks');
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
}