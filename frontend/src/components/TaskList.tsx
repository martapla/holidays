import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: string[];
  onDelete: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          index={index} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
