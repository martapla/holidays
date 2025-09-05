import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: string[];
  onDelete: (index: number) => void;
  onEdit: (index: number, newTask: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          index={index} 
          onDelete={onDelete} 
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
