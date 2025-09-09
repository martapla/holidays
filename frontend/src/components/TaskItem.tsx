import { useState } from 'react';

interface Task {
  _id: string;
  taskname: string;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTask: string) => void;
}


const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.taskname);

  const handleSave = () => {
    onEdit(task._id, newTask);
    setIsEditing(false);
  };

  return (
    <li>
    {isEditing ? (
      <>
        <textarea
          className='edit-textarea'
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button onClick={handleSave}>💾</button>
      </>
    ) : (
      <>
        <p>{task.taskname} </p>
        <div className='btn-items'>
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => onDelete(task._id)}>🗑️</button>
        </div>
      </>
    )}
  </li>
  );
};

export default TaskItem;
