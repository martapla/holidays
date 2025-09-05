import { useState } from 'react';

interface TaskItemProps {
  task: string;
  index: number;
  onDelete: (index: number) => void;
  onEdit: (index: number, newTask: string) => void; 
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onDelete, onEdit }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task);

  const handleSave = () => {
    onEdit(index, newText);
    setIsEditing(false);
  };

  return (
    <li>
    {isEditing ? (
      <>
        <textarea
          className='edit-textarea'
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
        />
        <button onClick={handleSave}>💾</button>
      </>
    ) : (
      <>
        <p>{task} </p>
        <div className='btn-items'>
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => onDelete(index)}>🗑️</button>
        </div>
      </>
    )}
  </li>
  );
};

export default TaskItem;
