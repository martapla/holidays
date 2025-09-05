import React, { useState } from 'react';

interface TaskFormProps {
    onAddTask: (task: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="write a note..."
            />
            <button type="submit" className='btn-add'>Add </button>
        </form>
    );
};

export default TaskForm;