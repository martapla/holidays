import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  _id: string;
  taskname: string;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newTask: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task, _id) => (
        <TaskItem 
          key={task._id}
          task={task} 
          onDelete={onDelete} 
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
