import React from 'react';

interface TaskItemProps {
  task: string;
  index: number;
  onDelete: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onDelete }) => {
  return (
    <li>
      {task}
      <button onClick={() => onDelete(index)}>🗑️</button>
    </li>
  );
};

export default TaskItem;
