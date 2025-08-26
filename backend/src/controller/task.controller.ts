import { Request, Response } from 'express';
import TaskModel from '../models/task.model';


// GET all tasks
export const getTasks = async (req: Request, res: Response) => {
    try {
      // Aquí iría la lógica para obtener los usuarios de la base de datos
      const tasks = await TaskModel.find()
      res.status(200).json({ message: 'List of tasks', data: tasks });
    } catch (error) {
      res.status(500).json({ message: 'Error tasks', error });
    }
  }

// POST create a new task
export const createTask = async (req: Request, res: Response) => {
    try {
      const { taskname } = req.body;
      const newTask = new TaskModel({ taskname });
      await newTask.save();
      res.status(201).json({ message: 'Task created', data: newTask });
    } catch (error) {
      res.status(500).json({ message: 'Error creating task', error });
    }
  }

// DELETE a task by ID
export const deleteTask = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedTask = await TaskModel.findByIdAndDelete(id);
      if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted', data: deletedTask });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting task', error });
    }
  }

// PUT update a task by ID
export const updateTask = async (req: Request, res: Response) => {  
    try {
      const { id } = req.params;
      const { taskname } = req.body;
      const updatedTask = await TaskModel.findByIdAndUpdate(
        id,
        { taskname },
        { new: true }
      );
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json({ message: 'Task updated', data: updatedTask });
    } catch (error) {
      res.status(500).json({ message: 'Error updating task', error });
    }
  }

  